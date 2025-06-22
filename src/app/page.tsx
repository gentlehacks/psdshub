"use client";
import {motion} from "framer-motion"
import IllustratedImage from "@/images/passwordImage-One.svg";
import { AppTheme } from "@/store";
import Image from "next/image"
import {useRouter} from "next/navigation"


const Home = () => {
  const {appTheme} = AppTheme()
  const route = useRouter()

  return (
    <div className={`w-full h-screen p-4 flex flex-col items-center justify-center 
       ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}
    `}>

    <div className="w-[100%] mb-[2rem] overflow-hidden flex items-center justify-center">
      <Image 
        src={IllustratedImage}
        width={200} 
        height={200} 
        alt="onboarding-1 svg" 
      />
    </div>
      

      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-3">
        Best Password Generator App      
      </h1>
      <p className="text-lg text-gray-400 text-center mb-[3em]">
        generate your password within a seconds! ⏰
      </p>


      <motion.button 
        onClick={() => route.push("/onboarding-2")}
        whileTap={{scale: [1.1, 1]}}
      className="w-[90%] max-w-[25rem] px-6 py-2 text-lg rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-bg duration-200 cursor-pointer mb-3">
        Continue
      </motion.button>
      <motion.button 
        onClick={() => route.push("/home")}
        whileTap={{scale: [1.1, 1]}}
      className={`w-[90%] max-w-[25rem] px-6 py-2 text-lg rounded-lg text-white  transition-bg duration-200 cursor-pointer
         ${appTheme 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-gray-400 hover:bg-gray-500'}
      `}>
        Skip
      </motion.button>
    </div>
  )
}

export default Home