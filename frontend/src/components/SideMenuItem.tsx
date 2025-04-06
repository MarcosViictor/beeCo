import { ReactNode } from "react"

interface SideMenuItemProps {
  icon: ReactNode
  label: string
  isOpen: boolean
  isActive?: boolean
  onClick?: () => void
}

export const SideMenuItem = ({ icon, label, isOpen, isActive = false, onClick }: SideMenuItemProps) => {
  return (
    <div 
      className={`
        flex ${isOpen ? 'justify-start' : 'justify-center'}
        items-center
        px-3 gap-3 cursor-pointer 
        transition-all ease-in-out rounded-[10px] h-12
        ${isActive && isOpen ? 'text-white bg-light-yellow' : ''}
        ${isActive && !isOpen ? 'text-light-yellow' : ''}
      `}
      onClick={onClick}
    >
      <div className={`flex-shrink-0 ${isActive ? 'text-light-yellow' : 'text-dark-gray'} ${isActive && isOpen ? 'text-white' : ''}`}>
        {icon}
      </div>
      <p className={`
        text-[1.2rem] whitespace-nowrap transition-all duration-300 overflow-hidden
        ${isActive && isOpen ? 'text-white' : 'text-dark-gray'}
        ${isOpen ? 'max-w-[200px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'}
      `}>
        {label}
      </p>
    </div>
  )
}
