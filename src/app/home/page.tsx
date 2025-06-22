"use client"
import {motion} from "framer-motion"
import { AppTheme, usePasswordStore } from "@/store"
import { useState } from "react";
import {  FaMoon, FaSun } from "react-icons/fa6"
import { FaSpinner } from "react-icons/fa6";
import { TbCopy, TbCopyCheck } from "react-icons/tb";
import StrongSelection from "@/components/StrongSelection";
import PasswordLength from "@/components/PasswordLength";
import PasswordStrength from "@/components/PasswordStrength";

const HomePage = () => {
  const {
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    generatePassword
  } = usePasswordStore();

  const {appTheme, setAppTheme} = AppTheme()

  const [generating, setGenerating] = useState<boolean>(false);
  const [errorGenerating, setErrorGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyMessage, setCopyMessage] = useState<string>("");

  const handleGeneratePassword = () => {
    setErrorGenerating(false);
    setGenerating(false);

    if (!includeNumbers 
        && !includeSymbols 
        && !includeUppercase 
        && !includeLowercase
      ) {
        setErrorGenerating(true)
        setTimeout(() => {
          setErrorGenerating(false)
        }, 5000)
      };

      if (includeNumbers || includeSymbols || includeUppercase || includeLowercase) {
        setGenerating(true);
        setErrorGenerating(false);

        setTimeout(() => {
          generatePassword();
          setGenerating(false);
        },3000);
      }
          
  };

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopyMessage("Copied!")
      setCopied(true);
      setTimeout(() => {
        setCopied(false)
      }, 5000)
    } catch (error) {
      setCopyMessage("Failed to copy!");
      console.log(error);
      setCopied(true);
      setTimeout(() => {
        setCopied(false)
      }, 5000)
    };
  };

  return (
    <div className="w-full h-[100vh] bg-black">
      <div className={`relative w-full h-screen sm:p-12 mx-auto p-4 transition-all duration-300
        ${appTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}
      `}>
        <h1 className={`text-3xl font-semibold text-center my-[2rem] rounded-lg px-6 py-3
           ${appTheme ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
        `}>
          Password Generator
        </h1>

        {/* Generated Password */}
        <div className="w-full flex flex-col mt-[2.5rem]">
          <label className="font-medium text-xm mb-2">
            Generated password
          </label>                                    
          <div className={`relative px-4 py-3 pl-8 h-[3rem] flex items-center rounded-xl
             ${appTheme ? 'bg-gray-800 text-white' : 'bg-gray-300 text-blue-500'} 
          `}> 
            <p className="text-left w-full">{generatedPassword}</p>
            {copied && (
              <motion.div 
                initial={{scale: 0.8}}
                animate={{scale: [0.8, 1.2, 0.9, 1]}}
                transition={{duration: 0.3}}
              className={`absolute left-5 top-[-15px] px-2 py-1 block bg-gray-700 rounded-md flex items-center justify-center
                 ${appTheme ? 'bg-gray-700 text-white' : 'bg-gray-400 text-blue-500'} 
              `}>
                <p className="text-sm">
                  {copyMessage}
                </p>
              </motion.div>
            )}
            <div className="absolute left-2">
              {copied ? (
                <TbCopyCheck />
              ) : (
                <TbCopy onClick={handleCopyPassword} />
              )}
            </div>
          </div>
        </div>

        
        {errorGenerating && (
          <motion.div className="flex items-center w-full mt-2"
            initial={{width: "0", opacity: 0}}
            animate={{width: "100%", opacity: 1}}
            transition={{duration: 0.3}}
          >
            <p className="text-red-400">
              Select atleast one checkbox!
            </p>
          </motion.div>
        )}
        {generating && (
          <motion.div className="flex items-center w-full mt-2"
            initial={{width: "0", opacity: 0}}
            animate={{width: "100%", opacity: 1}}
            transition={{duration: 0.3}}
          >
            <p className="text-blue-400">
              Generating new password...
            </p>
          </motion.div>
        )}

        {/* Password Length */}
        <PasswordLength />

        {/* Strong Selections */}
        <StrongSelection />

        {/* Password Strength */}
        <PasswordStrength />


        {/* Generate Password Button */}
        <motion.button 
          disabled={generating}
          onClick={handleGeneratePassword} 
          whileTap={{scale: generating 
            ? 1 
            : [0.9, 1.1, 1]
          }}
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg transition-all duration 200 w-full cursor-pointer mt-[2rem] mb-[1rem]">
          {generating ? (
            <motion.div className="flex items-center justify-center">
              <p className="mr-3">Generating</p>
              <motion.div
                animate={{rotate: 360}}
                transition={{duration: 1, repeat: Infinity,}}
              >
                <FaSpinner />
              </motion.div>
            </motion.div> 
          ) : (
            <p>Generate</p>
          )}
        </motion.button>

        <motion.div className="absolute top-10 right-10"
          drag='x'
          dragConstraints={{right: 10, left: 0}}
        >
          <div 
            onClick={() => setAppTheme()}
          className="w-15 h-15 bg-gray-800 text-white rounded-full border-2 border-yellow-500 flex items-center justify-center">
            {appTheme ? (
              <motion.div
                initial={{scale: 0.9}}
                animate={{scale: [0.9, 1.1, 1]}}
                transition={{duration: 0.2}}
              className="cursor-pointer flex items-center justify-center"
              >
                <FaMoon />
              </motion.div>
            ) : (
              <motion.div
                initial={{scale: 0.9}}
                animate={{scale: [0.9, 1.1, 1]}}
                transition={{duration: 0.2}}
              className="cursor-pointer flex items-center justify-center"
              >
                <FaSun />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Pexelxus Mark */}
        {/* <div className="absolute w-full flex itmes-center justify-center bottom-5 left-0 right-0 mx-auto">
          <p className="flex items-center text-1xl">
            ©
            <span className="ml-2">Pexelxus</span>
          </p>
        </div> */}

      </div>
    </div>
  )
}

export default HomePage;