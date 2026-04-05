import { randomBytes, createHash } from "crypto";
import { cookies } from "next/headers";
import prisma from "./prisma";

const SESSION_COOKIE = "ss_session";
const SESSION_DURATION_DAYS = 30;

/** Generate a secure random token and return both raw (for cookie) and hashed (for DB) forms. */
function generateToken(): { raw: string; hash: string } {
  const raw = randomBytes(48).toString("hex");
  const hash = createHash("sha256").update(raw).digest("hex");
  return { raw, hash };
}

/** Create a new session for a user, set an HttpOnly cookie, and persist the session in DB. */
export async function createSession(userId: string): Promise<void> {
  const { raw, hash } = generateToken();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + SESSION_DURATION_DAYS);

  await prisma.session.create({
    data: {
      userId,
      tokenHash: hash,
      expiresAt,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, raw, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

/** Retrieve the authenticated userId from the current session cookie. Returns null if invalid or expired. */
export async function getSessionUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  const hash = createHash("sha256").update(raw).digest("hex");
  const session = await prisma.session.findUnique({
    where: { tokenHash: hash },
    select: { userId: true, expiresAt: true },
  });

  if (!session) return null;
  if (session.expiresAt < new Date()) {
    // Session expired — clean it up
    await prisma.session.deleteMany({ where: { tokenHash: hash } });
    return null;
  }

  return session.userId;
}

/** Delete the current session (logout). */
export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;
  if (raw) {
    const hash = createHash("sha256").update(raw).digest("hex");
    await prisma.session.deleteMany({ where: { tokenHash: hash } });
  }
  cookieStore.delete(SESSION_COOKIE);
}
