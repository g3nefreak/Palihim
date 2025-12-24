import React, { useState } from 'react'
import Card from '@/components/reusable/Card'
import TextField from '@/components/reusable/TextField'
import Button from '@/components/reusable/Button'

const CreateAccountForm = ({ onLoginClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <Card
        variant="transparent"
        title="Create Account"
        description="Join us today! Create your account to start your secure journey with Palihim."
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

          <TextField
            label="Password"
            placeholder="Enter your password"
            size="sm"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full" size="md" variant="transparent">
              Create Account
          </Button>
        </div>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?
          <span
            onClick={onLoginClick}
            className="text-white cursor-pointer hover:underline ml-1"
          >
            Login
          </span>
        </p>
      </Card>
    </div>
  )
}

export default CreateAccountForm
