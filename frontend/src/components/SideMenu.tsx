import { Home, MessageSquare, User, LogOut, Menu, Search } from "lucide-react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { SideMenuItem } from "./SideMenuItem"

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const iconSize = 22

  const getActiveItem = (path: string) => {
    return location.pathname === path
  }

  const toggleClickMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavigation = (path: string) => {
    navigate(path)
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
          isActive={getActiveItem("/")}
          onClick={() => handleNavigation("/")}
        />
        <SideMenuItem 
          icon={<Search size={iconSize} />} 
          label="Pesquisar" 
          isOpen={isOpen} 
          isActive={getActiveItem("/search")}
          onClick={() => handleNavigation("/search")}
        />
        <SideMenuItem 
          icon={<MessageSquare size={iconSize} />} 
          label="Mensagens" 
          isOpen={isOpen} 
          isActive={getActiveItem("/chat")}
          onClick={() => handleNavigation("/chat")}
        />
        <SideMenuItem 
          icon={<User size={iconSize} />} 
          label="Perfil" 
          isOpen={isOpen} 
          isActive={getActiveItem("/profile")}
          onClick={() => handleNavigation("/")}
        />
        <div className="flex-grow" />
        <SideMenuItem 
          icon={<LogOut size={iconSize} />} 
          label="Sair" 
          isOpen={isOpen} 
          onClick={() => handleNavigation("/")}
        />
      </nav>
    </>
  )
}
