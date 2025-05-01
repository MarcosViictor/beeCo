import { SideMenu } from '@/components/SideMenu'
import Professionals from '@/assets/professionals.png'
import Profissionals2 from '@/assets/professionals2.png'
import Button from '@/components/Button'
import { ProfessionalCard } from '@/components/ProfessionalCard'
import { DataProfessionals } from '@/mock/DataProfessionals'
import { useNavigate } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { ServiceCard } from '@/components/ServiceCard'
import { services } from '@/mock/DataServiceCards'
import { Input } from '@/components/Input'

export const ContractingArea = () => {
  const navigate = useNavigate()

  const navigateToSearch = () => {
    navigate('/search')
  }

  return (
    <div className='flex'>
      <SideMenu />

      <main className='flex-1 overflow-y-auto bg-off-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <section className='p-10'>
            <div className='flex flex-col lg:flex-row bg-light-yellow-2 rounded-t-[37px] overflow-hidden'>
              <div className='p-8 lg:p-15'>
                <h1 className='text-3xl lg:text-5xl font-medium mb-6 lg:mb-9 max-w-[450px]'>
                  Encontre os profissionais certos para o seu projeto
                </h1>
                <p className='text-dark-gray max-w-[400px]'>
                  Conecte-se com prestadores qualificados de forma rápida,
                  segura e sem burocracia. Aqui, você encontra quem faz
                  acontecer.
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

          <section className='p-10 flex'>
            <img
              src={Profissionals2}
              className='w-[550px]'
              alt='Imagem ilustrativa de profissionais'
            />

            <div className='flex flex-col p-8 gap-10 bg-light-yellow-2  w-[580px] rounded-r-xl'>
              <h4 className='text-4xl text-dark-gray leading-[2.5rem]'>
                <span className='font-bold'>Bee</span>Co
              </h4>
              <p className='text-dark-gray max-w-[450px] text-sm'>
                O BeeCo é uma plataforma que aproxima profissionais qualificados
                de clientes que buscam serviços com agilidade, segurança e
                transparência. Através de uma interface simples e intuitiva,
                oferecemos ferramentas que facilitam o processo de contratação.
              </p>
              <p className='text-dark-gray max-w-[450px] text-sm'>
                Nosso sistema de chat ao vivo permite uma comunicação clara e
                instantânea, eliminando mal-entendidos. Além disso, oferecemos
                contratos digitais simplificados, com termos claros e proteção
                para ambas as partes, garantindo mais segurança para quem
                contrata e para quem presta o serviço.
              </p>
              <Button width='md' variant='primary' borderRadius='rounded'>
                Ver mais
              </Button>
            </div>
          </section>

          <section className='px-10 py-30'>
            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col gap-6 md:w-1/3'>
                <h2 className='text-2xl font-medium max-w-[280px] leading-[1.3]'>
                  Diversos prestadores de serviço para você!
                </h2>
                <p className='text-dark-gray max-w-[380px] text-sm'>
                  Encontre profissionais qualificados para atender às suas
                  necessidades com agilidade, confiança e sem complicações. Do
                  início ao fim, estamos aqui para facilitar sua jornada.
                </p>
                <div>
                  <Button width='md' variant='primary' borderRadius='rounded'>
                    Ver todos
                  </Button>
                </div>
              </div>

              <div className='md:w-2/3'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      title={service.title}
                      Icon={service.Icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  )
}