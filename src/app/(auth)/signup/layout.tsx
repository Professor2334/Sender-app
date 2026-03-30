import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Send Signal | Automated Personalized WhatsApp Outreach",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
