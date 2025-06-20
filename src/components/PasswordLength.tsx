import { AppTheme, usePasswordStore } from "@/store"

const PasswordLength = () => {
  const {length, setLength} = usePasswordStore();
  const {appTheme} = AppTheme()
  
  return (
    <div className={`flex items-center w-full justify-between mt-[2.5rem] 
       ${appTheme ? 'text-white' : 'text-gray-900'}
    `}>
      <label className="font-medium text-xm mb-2">Password length:</label>
      <div className="w-[70%] flex items-center">
        <input 
          type="range" 
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          min="4"
          max="60"
          className="w-full"  
        />
        <input 
          type="number" 
          value={length} 
          onChange={(e) => setLength(+e.target.value)} className="p-1 rounded-md w-[2.5rem] h-[1.5rem]  focus:border-none " 
        />
      </div>
      
    </div>
  )
}

export default PasswordLength