import { SideMenu } from '@/components/SideMenu'
import Professionals from '@/assets/professionals.png'

export const ContractingArea = () => {
  return (
    <div className='flex'>
      <SideMenu />

      <main className='flex-1 overflow-y-auto'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
   
          <section className='py-10'>
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

        </div>
      </main>
    </div>
  )
}
