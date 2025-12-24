import React, { useState } from 'react'
import Card from '@/components/reusable/Card'
import TextField from '@/components/reusable/TextField'
import Button from '@/components/reusable/Button'

const ForgotPasswordForm = ({ onBack }) => {
  const [email, setEmail] = useState("");

  return (
    <Card
      variant="transparent"
      title="Forgot Password"
      description="Enter your email to receive password reset instructions."
      className="max-w-md w-full"
    >
      <div className="flex flex-col gap-4">
        <TextField
          label="Email"
          placeholder="Enter your email"
          size="sm"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button className="w-full" size="md" variant="transparent">
          Send Reset Link
        </Button>

        <p className="text-sm text-center text-gray-400">
          Remember your password?
          <span
            onClick={onBack}
            className="text-white cursor-pointer hover:underline ml-1"
          >
            Back to login
          </span>
        </p>
      </div>
    </Card>
  );
};

export default ForgotPasswordForm
