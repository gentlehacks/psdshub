import { AppTheme, usePasswordStore } from '@/store'
import React from 'react'

const PasswordStrength = () => {
  const {strength} = usePasswordStore();
  const {appTheme} = AppTheme()

  return (
    <div className={`w-full flex flex-col items-left mt-4
      ${appTheme ? 'text-white' : 'text-gray-900'}
    `}>
        <label className="font-semibold text-md mb-2">
          Password strength
        </label>
        <div className={`w-full h-2 rounded-full mb-2 ${
          strength === "Very-Strong"
            ? 'bg-green-600'
            : strength === 'Strong'
            ? 'bg-green-400'
            : strength === 'Medium'
            ? 'bg-yellow-500'
            : strength === 'Weak'
            ? 'bg-red-500'
            : 'bg-gray-500'
          }`} 
        />
        <p className="font-light text-md capitalize">{strength || 'N/A'}</p>
      </div>
  )
}

export default PasswordStrength