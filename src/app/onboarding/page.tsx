"use client";

import { useState, useTransition } from "react";
import WelcomeStep from "./components/WelcomeStep";
import ConnectStep from "./components/ConnectStep";
import ImportStep from "./components/ImportStep";
import OrientationStep from "./components/OrientationStep";
import OnboardingProgress from "./components/OnboardingProgress";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      // Smooth scroll to top on step change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinish = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      {currentStep === 1 && (
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 mb-8">
          <h1 className="title-large text-on-surface font-bold">
            Welcome to Send Signal
          </h1>
        </div>
      )}

      {/* Modern Progress Indicator - Stays consistent across all steps */}
      <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />

      <div className="relative min-h-[400px]">
        {currentStep === 1 && (
          <WelcomeStep onNext={nextStep} />
        )}
        
        {currentStep === 2 && (
          <ConnectStep onNext={nextStep} onBack={() => setCurrentStep(prev => prev - 1)} />
        )}
        
        {currentStep === 3 && (
          <ImportStep onNext={nextStep} onBack={() => setCurrentStep(prev => prev - 1)} />
        )}
        
        {currentStep === 4 && (
          <OrientationStep onFinish={handleFinish} onBack={() => setCurrentStep(prev => prev - 1)} />
        )}
      </div>
    </div>
  );
}
