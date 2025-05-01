import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { SideMenu } from "@/components/SideMenu";
import { Textarea } from "@/components/TextArea";
import { useState } from "react";



export const Profile = () => {

    const [formData, setFormData] = useState({
        name: 'Pedro Alexandre',
        email: 'pedro@email.com',
        phone: '(55) 99999-1313',
        location: 'Juazeiro do Norte',
        gender: 'masculino',
        cpf: '123-123-123-12',
        birth: '12/12/12'
      });

    const scheduleData = {
        morning: {
            timeRange: '09h-12h',
            appointments: [
                { time: '11:00', name: 'Ana Julia' }
            ]
        },
    };

      const menuContent = ['Informações pessoais', 'Serviços', 'Disponibilidade']
      const [activeMenu, setActiveMenu] = useState('Informações pessoais')
      const [titleContent, setTitleContent] = useState('Informações pessoais')

      
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

      const handleMenuClick = (menu: string) => {
            setActiveMenu(menu)
            setTitleContent(menu)
      }

      const renderMenuContent = () => {
        switch(activeMenu) {
            case 'Informações pessoais':
                return (
                    <>   
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                    placeholder="Digite seu nome"
                                    label="Nome"
                                    value={formData.name} 
                                    />

                                    <Input
                                    placeholder="Digite email"
                                    label="E-mail"
                                    value={formData.email} 
                                    />

                                    <Input
                                    placeholder="Digite seu número"
                                    label="Telefone"
                                    value={formData.phone} 
                                    />

                                    <Input
                                    placeholder="Adicione sua localização"
                                    label="Localização"
                                    value={formData.location} 
                                    />

                                    <Input
                                    placeholder="***.***.***-**"
                                    label="CPF"
                                    value={formData.cpf} 
                                    />

                                    <Input
                                    placeholder="00/00/0000"
                                    label="Data de nascimento"
                                    value={formData.birth} 
                                    />
                    
                        </div>
                            
                        <div className="mt-6">
                                    <label className="block  mb-3">Sexo</label>
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
                                        <label htmlFor="male" className="">masculino</label>
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
                                        <label htmlFor="female" className="">feminino</label>
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
                                        <label htmlFor="other" className="">outros</label>
                                    </div>
                                    </div>
                        </div>
                    </>
                        
                )
            case 'Serviços':
                return (
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Textarea 
                                label="Descrição do serviço"
                                placeholder="Detalhe como é seu serviço..."
                                className="min-h-[100px]"
                            />
                            <Textarea 
                                label="Descrição de experiência"
                                placeholder="Detalhe sobre sua experiência"
                                className="min-h-[100px]"
                            />
                            <Select label="Tipo do serviço">
                                <option value="pedreiro">Pedreiro</option>
                                <option value="faxineiro">Faxineiro</option>
                            </Select>
                            <Input 
                                type="number"
                                placeholder="R$0.00"
                                label="Preço"
                            />
                            <Select label="Cobrado por">
                                <option value="hora">Hora</option>
                                <option value='diária'>Diária</option>
                            </Select>
                          
                        </div>

                        {/* <div className="flex w-full mt-8">
                            <Button
                            size="sm"
                            width="full"
                            >
                                Salvar
                            </Button>
                        </div> */}

                    </div>
                )
            case 'Disponibilidade':
                return (
                    <div className="p-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        <h1 className="text-2xl font-semibold">Sua agenda</h1>
                                        <p className="text-gray-400 text-sm">Consulte seus compromissos no dia!</p>
                                    </div>
                                    
                                    <Input
                                        type="date"
                                    />
                                </div>
                            
                            
                            </div>

                                {/* Morning Section */}
                            <div className="mt-6 border border-gray-800 rounded-lg overflow-hidden">
                                    <div className="flex justify-between items-center  bg-opacity-40 px-4 py-3  border-b-1 ">
                                        <div className="flex items-center">
                                            <span>Manhã</span>
                                        </div>
                                        <span className="text-gray-400 text-sm">{scheduleData.morning.timeRange}</span>
                                    </div>
                                
                                <div className="px-4 py-3">
                                    {scheduleData.morning.appointments.map((appointment, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 ">
                                        <div className="flex items-center">
                                        <span className="mr-4">{appointment.time}</span>
                                        <span>{appointment.name}</span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
      }

    return (
        <>
            <SideMenu />
            <div className="flex h-screen w-screenitems-center justify-center gap-10 text-dark-gray p-12">
      {/* Side Menu */}
                <div className="w-70 flex flex-col shadow-2xl rounded-[8px]">
                    <div className="p-6 flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-yellow-300 mb-6"></div>

                    <span className="text-[1.2rem]">Pedro Alexandre</span>
                    <span className="text-gray-400">Agricultor</span>

                    <div className="w-full border-t border-gray-200 my-5"></div>

                    <ul className="w-full text-center py-4 hover:gray-200 transition gap-3 flex flex-col ">
                        {menuContent.map((menu, index) => (
                            <li 
                                key={index}
                                className={`p-2 hover:shadow-md transition-all ease-in-out rounded-[8px] cursor-pointer  ${menu === activeMenu ?  'border-2 text-light-yellow' : ''}`}
                                onClick={() => handleMenuClick(menu)}
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
      
            {/* Main Content */}
            <div className="flex p-8 shadow-2xl gap-20 rounded-[8px]">
                <div className="max-w-4xl">
                    <div className="flex justify-between items-center mb-8">
                            <h2 className=" text-xl">{titleContent}</h2>
                                <Button
                                    variant="outline"
                                    size="sm"
                                >
                                    Editar
                                </Button>
                            </div>
                        {renderMenuContent()}
                    </div>
            </div>
                
        </div>
        </>
    )
}
