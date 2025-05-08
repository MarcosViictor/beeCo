import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ProfessionalCard } from '@/components/ProfessionalCard'
import { SideMenu } from '@/components/SideMenu'
import { Search, Filter } from 'lucide-react'
import { DataProfessionals } from '@/mock/DataProfessionals'

export const SearchProfessional = () => {
  return (
    <>
      <SideMenu />
      <section className='flex justify-center items-center px-30 w-full pt-10 pb-40 flex-col gap-5'>
        <div className='flex gap-2 w-[500px]'>
          <Input placeholder='Ex.: Pedreiro' fullWidth={true} />

          <Button icon={<Search size={20} />} size='sm'>
            Pesquisar
          </Button>
        </div>

        <div className='w-[1580px] flex justify-between pb-5 items-center'>
          <h3 className='text-[1.3rem]'>Resultados para Josefa</h3>
          <Button icon={<Filter size={20} />} size='sm' variant='outline'>
            Filtrar
          </Button>
        </div>

                <div className="grid grid-cols-5 gap-6.5 min-w-[1580px]">
                    {DataProfessionals.map((item, index) => (
                        <ProfessionalCard
                            key={index}
                            {...item} //pega todas as propriedades
                        />
                    ))}
                </div>
            </section>
        </>
    )
}
