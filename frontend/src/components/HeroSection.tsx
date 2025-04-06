import Workers from '@/assets/workers.png'
import Button from './Button'

export const HeroSection = () => {
  return (
    <section className='flex justify-center items-center gap-60 px-10 bg-off-white'>
      <div className='flex gap-6 flex-col'>
        <h1 className='font-[400] text-[4rem] text-dark-gray leading-[2.5rem]'>
          <span className='font-bold'>Bee</span>Co
        </h1>

        <p className='text-dark-gray text-[1.2rem] leading-[1.5rem] flex flex-col w-[450px] tracking-wide'>
          O BeeCo revoluciona a comunicação entre prestadores de serviço e
          contratantes com chat ao vivo e contratos simplificados.
        </p>

        <div
          className='
        flex gap-5'
        >
          <Button width='md' variant='outline' className='uppercase'>
            experimentar agora
          </Button>
        </div>
      </div>

      <div>
        <img src={Workers} alt='Ilustração de Trabalhadores' />
      </div>
    </section>
  )
}
