"use client"
import { motion } from "framer-motion";
import IllustratedImage from "@/images/passwordImage-Two.svg";
import Image from "next/image"
import {useRouter} from "next/navigation"
import { AppTheme } from "@/store";

const Onboarding2 = () => {
  const {appTheme} = AppTheme()
  const route = useRouter();

  return (
    <div className={`w-full h-screen p-4 flex flex-col items-center justify-center
      ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
    `}>
      <div className="w-[100%] mb-[3rem] overflow-hidden flex items-center justify-center">
        <Image 
          src={IllustratedImage}
          width={300}
          height={300}
          alt="onboarding-2 svg"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3">
        Have a Unique password with Ease!
      </h1>
      <p className="text-lg text-gray-400 text-center mb-[3rem]">
        Secure your passwords by using Password generator.
      </p>

      <motion.button 
        onClick={() => route.push("/home")}
        whileTap={{scale: [1.1, 1]}}
      className="w-[90%] max-w-[25rem] px-6 py-2 text-lg rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-bg duration-200 cursor-pointer mb-3">
        Get Started
      </motion.button>
      <motion.button 
        onClick={() => route.back()}
      className={`w-[90%] max-w-[25rem] px-6 py-2 text-lg rounded-lg text-white transition-bg duration-200 cursor-pointer mb-3
        ${appTheme 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-gray-400 hover:bg-gray-500'}
      `}>
        Back
      </motion.button>

    </div>
  )
};

export default Onboarding2;