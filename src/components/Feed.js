import {SparklesIcon} from "@heroicons/react/24/outline"
import Input from "./Input"

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-3 px-2 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer py-2">Home</h2>
        <div className="hoverEffect flex items-center justify-center ml-auto w-9 h-9"> {/*eliminated px-0 here*/}
          <SparklesIcon className="h-5"/> 
        </div>
      </div>
      <Input/>
    </div>
  )
}
