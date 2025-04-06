import Facebook from "@/assets/facebook.svg"
import Twitter from "@/assets/Twitter.svg"
import Instagram from "@/assets/Instagram.svg"
import Youtube from '@/assets/YouTube.svg'

export const Footer = () => {
    return (
      <footer id="contato" className='bg-white text-dark-gray px-30 py-6  flex flex-col gap-4 '>
        <div className='flex justify-around text-[.9rem]'>
          <div className='flex flex-col gap-4 '>
            <h4 className='text-4xl text-dark-gray leading-[2.5rem]'>
              <span className='font-bold'>Bee</span>Co
            </h4>
            <p className='max-w-[300px] text-dark-gray'>
              Revolucionando a comunicação entre prestadores de serviço e
              contratantes.
            </p>
            <ul className='flex gap-4 cursor-pointer'>
              <li className='cursor-pointer'>
                <img src={Facebook} alt='Logo do Facebook' />
              </li>
              <li className='cursor-pointer'>
                <img src={Twitter} alt='Logo do Twitter' />
              </li>
              <li className='cursor-pointer'>
                <img src={Instagram} alt='Logo do Instagram' />
              </li>
              <li className='cursor-pointer'>
                <img src={Youtube} alt='Logo do Youtube' />
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-2xl font-medium mb-3'>Recursos</h4>
            <ul className='flex flex-col gap-2 text-dark-gray'>
              <li className='cursor-pointer underline'>Chat ao vivo</li>
              <li className='cursor-pointer underline'>Contratos Digitais</li>
              <li className='cursor-pointer underline'>Avaliações</li>
            </ul>
          </div>
          <div>
            <h4 className='text-2xl font-medium mb-3'>Perfis</h4>
            <ul className='flex flex-col gap-2 text-dark-gray'>
              <li className='cursor-pointer underline'>
                Para prestadores de serviço
              </li>
              <li className='cursor-pointer underline'>Para contratantes</li>
              <li className='cursor-pointer underline'>
                Cadastro de Prestadores de serviço
              </li>
              <li className='cursor-pointer underline'>
                Cadastro de contratantes
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-2xl font-medium mb-3'>Legal</h4>
            <ul className='flex flex-col gap-2 text-dark-gray'>
              <li className='cursor-pointer underline'>Política de privacidade</li>
              <li className='cursor-pointer underline'>Termos de uso</li>
              <li className='cursor-pointer underline'>Política de cookies</li>
              <li className='cursor-pointer underline'>Segurança</li>
            </ul>
          </div>
        </div>
        <hr className='mt-20 border-[#D9DBE9]' />
        <p className='text-center text-[.9rem] text-dark-gray'>
          © 2025 BeeCo. Todos os direitos reservados.
        </p>
      </footer>
    )
}