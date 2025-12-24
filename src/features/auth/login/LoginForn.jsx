import React, { useState } from "react";
import Card from "@/components/reusable/Card";
import TextField from "@/components/reusable/TextField";
import Button from "@/components/reusable/Button";

const LoginForm = ({ onSignUpClick, onForgotPassword }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card
      variant="transparent"
      title="Palihim"
      description="Sign in to access your account and continue your journey"
      className="max-w-md w-full"
    >
      <div className="flex flex-col gap-6">
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            placeholder="Enter your email"
            size="sm"
            variant="outlined"
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex flex-col gap-1">
            <TextField
              label="Password"
              placeholder="Enter your password"
              size="sm"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Forgot password */}
            <span
              onClick={onForgotPassword}
              className="text-xs text-right text-gray-400 cursor-pointer hover:text-white hover:underline"
            >
              Forgot password?
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button className="w-full" size="md" variant="transparent">
            LOGIN
          </Button>

          <p className="text-sm text-center text-gray-400">
            Don't have an account?
            <span
              onClick={onSignUpClick}
              className="text-white cursor-pointer hover:underline ml-1"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default LoginForm;
