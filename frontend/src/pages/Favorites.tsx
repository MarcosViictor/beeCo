import { SideMenu } from "@/components/SideMenu"
import { Input } from "@/components/Input"
import Button from "@/components/Button"
import { Search } from "lucide-react"
import { DataProfessionals } from "@/mock/DataProfessionals"
import { ProfessionalCard } from "@/components/ProfessionalCard"
import { Footer } from "@/components/Footer"

export const Favorites = () => {
    return (
        <>
            <SideMenu />
            <section className="flex justify-center items-center px-30 w-full pt-10 pb-40 flex-col gap-5">
                
                <div className="flex gap-2 w-[500px]">
                        <Input
                            placeholder="Ex.: Pedreiro"
                            fullWidth={true}
                        />
                    
                        <Button
                            icon={<Search size={20} />}
                            size="sm"
                        >
                            Pesquisar
                        </Button>
                        
                </div>

                <div className="w-[1580px] flex justify-between pb-5 items-center">
                    <h3 className="text-[1.3rem]">Seus favoritos</h3>
                </div>

                <div className="grid grid-cols-5 gap-6.5 min-w-[1580px]">
                    {DataProfessionals.map((item, index) => (
                        <ProfessionalCard
                            key={index}
                            {...item} 
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}