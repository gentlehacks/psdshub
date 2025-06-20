"use client"
import { AppTheme, usePasswordStore } from "@/store"
import { FaSquareCheck } from "react-icons/fa6";

const StrongSelection = () => {
  const {
    includeNumbers,
    toggleNumbers,
    includeSymbols,
    toggleSymbols,
    includeUppercase,
    toggleUppercase,
    includeLowercase,
    toggleLowercase,
  } = usePasswordStore();
  const {appTheme} = AppTheme()

  return (
    <div className={`w-full flex flex-col mt-[2rem]
      ${appTheme ? 'text-white' : 'text-gray-900'}
    `}>
      <div className="flex items-center mb-4">
        {includeNumbers ? (
          <FaSquareCheck 
            onClick={() => toggleNumbers()}
            className="w-[1.3rem] h-[1.3rem] text-blue-600 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        ) : (
          <FaSquareCheck 
            onClick={() => toggleNumbers()}
            className="w-[1.2rem] h-[1.2rem] text-gray-400 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        )}
        <p className="ml-3 text-md">Include Numbers (1234)</p>
      </div>
      <div className="flex items-center mb-4">
        {includeSymbols ? (
          <FaSquareCheck 
            onClick={() => toggleSymbols()}
            className="w-[1.3rem] h-[1.3rem] text-blue-600 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        ) : (
          <FaSquareCheck 
            onClick={() => toggleSymbols()}
            className="w-[1.2rem] h-[1.2rem] text-gray-400 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        )}
        <p className="ml-3 text-md">Include Symbols (@#&)</p>
      </div>
      <div className="flex items-center mb-4">
        {includeUppercase ? (
          <FaSquareCheck 
            onClick={() => toggleUppercase()}
            className="w-[1.3rem] h-[1.3rem] text-blue-600 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        ) : (
          <FaSquareCheck 
            onClick={() => toggleUppercase()}
            className="w-[1.2rem] h-[1.3rem] text-gray-400 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        )}
        <p className="ml-3 text-md">Include Uppercae (ABC)</p>
      </div>
      <div className="flex items-center mb-4">
        {includeLowercase ? (
          <FaSquareCheck 
            onClick={() => toggleLowercase()}
            className="w-[1.3rem] h-[1.3rem] text-blue-600 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        ) : (
          <FaSquareCheck 
            onClick={() => toggleLowercase()}
            className="w-[1.2rem] h-[1.2rem] text-gray-400 hover:text-blue-500 transition-all duration-200 ease-in-out cursor-pointer" 
          />
        )}
        <p className="ml-3 text-md">
          Include Lowercase (abc)
        </p>
      </div>
    </div>
  )
}

export default StrongSelection