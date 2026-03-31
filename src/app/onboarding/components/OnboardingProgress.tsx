"use client";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
  return (
    <div className="w-full max-w-xl mx-auto mb-12 text-center">
      <div className="flex gap-2 mb-4 justify-center">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNumber = i + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                isActive ? "bg-primary w-24" : isCompleted ? "bg-primary w-12" : "bg-outline-variant w-12"
              }`}
            />
          );
        })}
      </div>
      <p className="label-small text-on-surface-variant animate-in fade-in slide-in-from-bottom-2 duration-700">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
