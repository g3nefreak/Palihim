import React, { useState } from "react";
import LoginForm from "@/features/auth/login/LoginForn";
import CreateAccountForm from "@/features/auth/create_account/CreateAccountForm";
import ForgotPasswordForm from "@/features/auth/forgot_pass/ForgotPasswordForm";

const LandingPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [backView, setBackView] = useState("signup");

  const flipToSignup = () => {
    setBackView("signup");
    setIsFlipped(true);
  };

  const flipToForgot = () => {
    setBackView("forgot");
    setIsFlipped(true);
  };

  const flipToLogin = () => setIsFlipped(false);

  return (
    <div className="h-screen flex font-poppins overflow-hidden">
      {/* Left side */}
      <div className="hidden lg:flex w-1/2 bg-gray-700 items-center justify-center">
        <div className="text-white text-4xl font-bold italic">Logo/Brand</div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 bg-black text-white flex items-center justify-center p-8 perspective-1000">
        <div
          className={`relative w-full max-w-md transition-all duration-700 preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* FRONT — LOGIN */}
          <div className="backface-hidden w-full">
            <LoginForm
              onSignUpClick={flipToSignup}
              onForgotPassword={flipToForgot}
            />
          </div>

          {/* BACK — SIGN UP / FORGOT */}
          <div className="absolute top-0 left-0 w-full backface-hidden rotate-y-180">
            {backView === "signup" && (
              <CreateAccountForm onLoginClick={flipToLogin} />
            )}

            {backView === "forgot" && (
              <ForgotPasswordForm onBack={flipToLogin} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
