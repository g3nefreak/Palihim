import React from 'react'
import Card from '@/components/reusable/Card'

const CreateAccountForm = ({ onLoginClick }) => {
  return (
    <div>
        <Card
          variant="transparent"
          title="Create Account"
          description="Join us today! Create your account to start your secure journey with Palihim."
        >
          <p className="text-sm text-center text-gray-400">
            Already have an account?
                <span onClick={onLoginClick} className="text-white cursor-pointer hover:underline ml-1">
                Login
                </span>
            </p>
        </Card>
    </div>
  )
}

export default CreateAccountForm
