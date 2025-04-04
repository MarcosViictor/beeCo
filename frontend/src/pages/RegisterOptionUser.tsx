import { Button } from "@/components/Button"
import { Link } from "react-router-dom"

export const RegisterOptionUser = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen ">
            <div className="flex flex-col gap-13 w-[350px] " >
                <div className="flex flex-col gap-2">
                    <h1 className="font-[400] text-[2rem] text-dark-gray leading-[2.5rem]">Comece agora com o <span className="font-bold">Bee</span>Co</h1>
                    <p className="uppercase text-sm text-gray-500 font-light">Cadastre-se grátis</p>
                </div>
                <div className="flex flex-col gap-4">
                    <Button 
                        variant="primary" 
                        size="md" 
                        width="full" 
                        className="text-[]"
                        as={Link}
                        to="/register-professional"
                    >
                        <p className="uppercase">Profissional</p>
                    </Button>
                    <Button 
                        variant="outline" 
                        size="md" 
                        width="full"
                        as={Link}
                        to="/register-client"
                    >
                        <p className="uppercase">cliente</p>
                    </Button>
                    <p className="text-[0.7rem] text-gray-500 underline">Ao se inscrever no <span className="font-bold">Bee</span>Co, você concorda com nossa Política de Privacidade e Termos de Serviço</p>
                    <p className="text-sm text-gray-500 text-center pt-7">Já tem uma conta? <Link to="/login" className="text-light-yellow font-bold">ENTRAR</Link></p>
            
                </div>
            </div>
        </div>
    )
}
