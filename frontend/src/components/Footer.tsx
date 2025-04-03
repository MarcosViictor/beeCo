import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-light-yellow text-white px-30 py-5 flex flex-col gap-4 ">
            <div className="flex justify-around text-[.9rem]">
                <div className="flex flex-col gap-3 ">
                    <h4 className="text-2xl font-medium">BeeCo</h4>
                    <p className="">Revolucionando a comunicação entre prestadores de serviço e contratantes.</p>
                    <ul className="flex gap-4 cursor-pointer">
                        <li className="cursor-pointer"><Facebook className="text-white" /></li>
                        <li className="cursor-pointer"><Instagram className="text-white" /></li>
                        <li className="cursor-pointer"><Linkedin className="text-white" /></li>
                        <li className="cursor-pointer"><Twitter className="text-white" /></li>
                    </ul>
                </div>
                <div>
                   <h4 className="text-2xl font-medium mb-3">Recursos</h4>
                   <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">Chat ao vivo</li>
                        <li className="cursor-pointer">Contratos Digitais</li>
                        <li className="cursor-pointer">Avaliações</li>
                   </ul>
                </div>
                <div>
                    <h4 className="text-2xl font-medium mb-3">Perfis</h4>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">Para prestadores de serviço</li>
                        <li className="cursor-pointer">Para contratantes</li>
                        <li className="cursor-pointer">Cadastro de Prestadores de serviço</li>
                        <li className="cursor-pointer">Cadastro de contratantes</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-2xl font-medium mb-3">Legal</h4>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">Política de privacidade</li>
                        <li className="cursor-pointer">Termos de uso</li>
                        <li className="cursor-pointer">Política de cookies</li> 
                    </ul>
                </div>
            </div>
            <hr className="mt-20" />
            <p className="text-center text-[.8rem]">© 2025 BeeCo Todos os direitos reservados , Inc.</p>
        </footer>
    )
}