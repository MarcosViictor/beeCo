import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

import { Link } from "react-router-dom"

import googleIcon from "@/assets/google.svg"

    export const RegisterProfessional = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="flex gap-30 justify-center items-center w-[800px] ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center gap-2">
                            <Button 
                                variant="softYellow" 
                                size="md" 
                                width="full" 
                                icon={<img src={googleIcon} alt="Google" />}
                                className="text-gray-500"
                            >
                                Entrar com Google
                            </Button>
                        </div>
                        <div className="flex justify-center items-center gap-2 w-full ">
                            <hr className="border-gray-300 w-[130px]" />
                            <span className="text-gray-500 text-[.8rem] text-center px-2">Ou E-mail</span>
                            <hr className="border-gray-300 w-[130px]" />
                        </div>
                        <Input label="Nome" type="text" placeholder="Digite seu nome"/>
                        <Input label="Email" type="text" placeholder="Digite seu email"/>
                        <Input label="Senha" type="password" placeholder="Digite sua senha" />
                        <Input label="Confirmar Senha" type="password" placeholder="Confirme sua senha" />
                        <div className="flex justify-between items-center mt-6">
                            <Button 
                                variant="primary" 
                                size="md" 
                                width="full" 
                                className="uppercase"
                            >
                                continuar
                            </Button>
                        </div>
                    
                    </div>
                    <p className="text-[0.7rem] text-gray-500 underline">Ao se inscrever no <span className="font-bold">Bee</span>Co, você concorda com nossa Política de Privacidade e Termos de Serviço</p>
                    
                    <p className="text-sm text-gray-500 text-center mt-3 flex justify-center items-center gap-1">Não tem uma conta?
                            <Link 
                                to="/register-option"
                                className="text-light-yellow font-bold uppercase"
                            >
                                criar conta
                            </Link>
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-[400px]">
                    <h1 className="font-[400] text-[3.7rem] text-dark-gray leading-[2.5rem]">
                        <span className="font-bold">Bee</span>Co
                    </h1>
                    <p className="text-gray-500 text-[1.2rem] leading-[1.5rem]">
                       Faça parte da <span className="font-bold">Bee</span>Co como prestador de serviços!
                    </p>
                </div>
            </div>
        </div>
    )
}
