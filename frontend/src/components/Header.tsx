import { Link } from 'react-router-dom'
import Logo from '@/assets/logo.svg'
import { Button } from '@/components/Button' // Importando o botão

export const Header = () => {
  return (
    <header className=' flex justify-center items-center py-4 bg-off-white'>
      <div className='flex gap-23 items-center '>
        <a href='#'>
          <img src={Logo} alt='BeeCo Logo' className='h-19' />
        </a>

        <nav className='flex items-center gap-18'>
          <ul className='flex gap-20 text-dark-gray font-medium uppercase tracking-tight'>
            <li>
              <a href='#' className='text-light-yellow'>
                início
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-light-yellow'>
                serviços
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-light-yellow'>
                sobre nós
              </a>
            </li>
          </ul>

          <div className='flex items-center gap-12'>
            <span className='text-light-yellow'>|</span>

            <Button
              variant='primary'
              size='md'
              width='md'
              borderRadius='rounded'
              className='uppercase font-medium tracking-wide py-3 text-sm'
              as={Link}
              to='/login'
            >
              criar conta
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}