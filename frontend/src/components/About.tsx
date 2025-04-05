import Providers from "@/assets/providers.png"
import Button from "./Button"

export const About = () => {
  return (
    <section className='flex gap-18 justify-center bg-off-white'>
      <div>
        <img
          src={Providers}
          className='w-150'
          alt='Ilustração de prestadores'
        />
      </div>
      <div className='flex flex-col gap-8 mt-15'>
        <h2 className='font-semibold leading-13.5 tracking-wide text-dark-gray text-6xl max-w-130'>
          Como o BeeCo Funciona,{' '}
          <span className='text-light-yellow'>Um processo simples</span>
        </h2>
        <p className='text-dark-gray max-w-[550px]'>
          Cadastre-se como prestador de serviço ou contratante em apenas alguns
          minutos, encontre prestadores ou contratantes ideais para suas
          necessidades, utilize nosso chat ao vivo para discutir detalhes,
          esclarecer dúvidas e negociar valores e Formalize o acordo com um
          clique, diretamente pelo chat, sem burocracia.
        </p>

        <Button
          variant='primary'
          size='md'
          width='md'
          borderRadius='rounded'
          className='uppercase font-medium tracking-wide py-3 text-sm'
        >
          começar agora
        </Button>
      </div>
    </section>
  )
}