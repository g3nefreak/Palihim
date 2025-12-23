import React, { useState } from "react";
import LoginForm from "@/features/auth/login/LoginForn"; // Keeping your current spelling
import CreateAccountForm from "@/features/auth/create_account/CreateAccountForm";

const LandingPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="h-screen flex font-poppins overflow-hidden">
      {/* Left side */}
      <div className="hidden lg:flex w-1/2 bg-gray-700 items-center justify-center">
        <div className="text-white text-4xl font-bold italic">Logo/Brand</div>
      </div>

      {/* Right side: The Flip Container */}
      <div className="w-full lg:w-1/2 bg-black text-white flex items-center justify-center p-8 perspective-1000">
        <div className={`relative w-full max-w-md transition-all duration-700 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
          
          {/* Front Side (Login) */}
          <div className="backface-hidden w-full">
            <LoginForm onSignUpClick={handleFlip} />
          </div>

          {/* Back Side (Create Account) */}
          <div className="absolute top-0 left-0 w-full backface-hidden rotate-y-180">
            <CreateAccountForm onLoginClick={handleFlip} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;