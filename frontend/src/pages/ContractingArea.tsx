import { SideMenu } from '@/components/SideMenu'
import Professionals from '@/assets/professionals.png'
import Button from '@/components/Button'
import { ProfessionalCard } from '@/components/ProfessionalCard'
import { DataProfessionals } from '@/mock/DataProfessionals'
import { useNavigate } from 'react-router-dom'

export const ContractingArea = () => {
  const navigate = useNavigate()

  const navigateToSearch = () => {
    navigate('/search')
  }

  return (
    <div className='flex'>
      <SideMenu />

      <main className='flex-1 overflow-y-auto'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <section className='p-10'>
            <div className='flex flex-col lg:flex-row bg-light-yellow-2 rounded-t-[37px] overflow-hidden'>
              <div className='p-8 lg:p-15'>
                <h1 className='text-3xl lg:text-5xl font-medium mb-6 lg:mb-9 max-w-[450px]'>
                  Find your perfect place to stay
                </h1>
                <p className='text-dark-gray max-w-[400px]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div>
                <img
                  src={Professionals}
                  className='h-[500px]'
                  alt='Imagem ilustrativa de profissionais'
                />
              </div>
            </div>
          </section>

          <section className='p-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-8'>
              <h2 className='font-medium text-3xl'>Encontre profissionais</h2>
              <div className='flex items-center justify-between'>
                <p className='text-dark-gray max-w-[420px]'>
                  Explore e encontre o profissional perfeito para o que você
                  procura!
                </p>

                <Button
                  width='auto'
                  variant='primary'
                  borderRadius='rounded'
                  onClick={navigateToSearch}
                >
                  Ver tudo
                </Button>
              </div>
            </div>
            <div className='flex justify-between flex-wrap '>
              {DataProfessionals.slice(0, 3).map((item, index) => (
                <ProfessionalCard key={index} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
