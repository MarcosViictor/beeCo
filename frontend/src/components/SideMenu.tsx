import { Home, Bell, MessageSquare, User, LogOut, Menu } from "lucide-react"
import { useState } from "react"
import { SideMenuItem } from "./SideMenuItem" // ajuste o caminho se necessário

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Início")
  const iconSize = 22

  const toggleClickMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (label: string) => {
    setActiveItem(label)
  }

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 z-40 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleClickMenu}
      />

      <nav className={`flex flex-col gap-3 fixed top-0 h-full bg-white shadow-lg z-50 p-6 transition-all ease-in-out duration-300 ${isOpen ? 'w-80' : 'w-18'}`}>
        <button className="flex items-center justify-start mb-4 mr-1 cursor-pointer" onClick={toggleClickMenu}>
          <Menu size={iconSize} strokeWidth={2} />
        </button>

        <SideMenuItem 
          icon={<Home size={iconSize} />} 
          label="Início" 
          isOpen={isOpen} 
          isActive={activeItem === "Início"}
          onClick={() => handleItemClick("Início")}
        />
        <SideMenuItem 
          icon={<Bell size={iconSize} />} 
          label="Notificações" 
          isOpen={isOpen} 
          isActive={activeItem === "Notificações"}
          onClick={() => handleItemClick("Notificações")}
        />
        <SideMenuItem 
          icon={<MessageSquare size={iconSize} />} 
          label="Mensagens" 
          isOpen={isOpen} 
          isActive={activeItem === "Mensagens"}
          onClick={() => handleItemClick("Mensagens")}
        />
        <SideMenuItem 
          icon={<User size={iconSize} />} 
          label="Perfil" 
          isOpen={isOpen} 
          isActive={activeItem === "Perfil"}
          onClick={() => handleItemClick("Perfil")}
        />
        <div className="flex-grow" />
        <SideMenuItem 
          icon={<LogOut size={iconSize} />} 
          label="Sair" 
          isOpen={isOpen} 
          isActive={activeItem === "Sair"}
          onClick={() => handleItemClick("Sair")}
        />
      </nav>
    </>
  )
}
