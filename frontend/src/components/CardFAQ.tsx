import { CircleArrowDown, CircleArrowUp } from "lucide-react"
import { useState } from "react"

interface CardFAQProps {
  title: string
  content: string   
}

export const CardFAQ = ({ title, content }: CardFAQProps) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div 
      className="w-[70%] h-full px-10 py-5 flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex-1">
        <h3 className="text-bold text-[1.3rem]">{title}</h3>
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-[1rem] text-gray-500 w-auto text-start">
            {content}
          </p>
        </div>
      </div>
      
      <div className="flex-shrink-0 ml-4 transform transition-transform duration-300 ease-in-out">
        {isOpen ? 
          <CircleArrowUp className={` text-dark-gray w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} /> : 
          <CircleArrowDown className={` text-dark-gray w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        }
      </div>
    </div>
  )
}
