import { SideMenu } from "@/components/SideMenu";
import { useState } from "react";

export const Profile = () => {

    const [formData, setFormData] = useState({
        name: 'Pedro Alexandre',
        email: 'pedro@email.com',
        phone: '(55) 99999-1313',
        location: 'Juazeiro do Norte',
        gender: 'masculino'
      });
      
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'radio') {
          setFormData({
            ...formData,
            gender: name
          });
        } else {
          setFormData({
            ...formData,
            [name]: value
          });
        }
      };

    return (
        <>
            <SideMenu />
            <div className="flex h-screen bg-gray-900">
      {/* Side Menu */}
                <div className="bg-gray-800 m-20 w-64 flex flex-col">
                    <div className="p-6 flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-yellow-300 mb-6"></div>
                    
                    <button className="w-full py-2 px-4 border border-gray-600 text-white rounded mb-4 hover:bg-gray-700 transition">
                        Editar
                    </button>
                    
                    <div className="w-full border-t border-gray-700 my-2"></div>
                    
                    <button className="w-full text-center py-3 text-white text-sm hover:bg-gray-700 transition px-4 bg-gray-700">
                        Informações pessoais
                    </button>
                    
                    <button className="w-full text-center py-3 text-white text-sm hover:bg-gray-700 transition px-4">
                        Serviços
                    </button>
                    
                    <button className="w-full text-center py-3 text-white text-sm hover:bg-gray-700 transition px-4">
                        Disponibilidade
                    </button>
                    
                    <div className="flex-grow"></div>
                    <div className="w-full border-t border-gray-700 mt-6"></div>
                    
                    <button className="w-full text-center py-3 text-red-500 text-sm hover:bg-gray-700 transition px-4 mt-2">
                        Elimina conta
                    </button>
                    </div>
                </div>
      
      {/* Main Content */}
                <div className="flex-1 p-8">
                    <div className="max-w-4xl">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-white text-lg">Informações pessoais</h2>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                        Editar
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label htmlFor="name" className="block text-white mb-2">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="phone" className="block text-white mb-2">Número</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="location" className="block text-white mb-2">Localização</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
                        />
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="block text-white mb-3">Sexo</label>
                        <div className="flex space-x-6">
                        <div className="flex items-center">
                            <input
                            type="radio"
                            id="male"
                            name="masculino"
                            checked={formData.gender === 'masculino'}
                            onChange={handleChange}
                            className="mr-2 h-4 w-4 accent-yellow-400"
                            />
                            <label htmlFor="male" className="text-white">masculino</label>
                        </div>
                        
                        <div className="flex items-center">
                            <input
                            type="radio"
                            id="female"
                            name="feminino"
                            checked={formData.gender === 'feminino'}
                            onChange={handleChange}
                            className="mr-2 h-4 w-4"
                            />
                            <label htmlFor="female" className="text-white">feminino</label>
                        </div>
                        
                        <div className="flex items-center">
                            <input
                            type="radio"
                            id="other"
                            name="outros"
                            checked={formData.gender === 'outros'}
                            onChange={handleChange}
                            className="mr-2 h-4 w-4"
                            />
                            <label htmlFor="other" className="text-white">outros</label>
                        </div>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <label className="block text-white mb-3">CPF/Data de nascimento</label>
                        <div className="flex items-center">
                        <span className="text-white font-mono">*** *** 000-00 / ** ** ****</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
