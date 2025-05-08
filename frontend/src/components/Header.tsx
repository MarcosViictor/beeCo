import { Link } from 'react-router-dom'
import Logo from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <header
      id='inicio'
      className='flex justify-center items-center py-4 bg-off-white'
      data-aos="fade-down"
    >
      <div className='flex gap-23 items-center '>
        <a href='#'>
          <img src={Logo} alt='BeeCo Logo' className='h-19' />
        </a>

        <nav className='flex items-center gap-18'>
          <ul className='flex gap-18 text-dark-gray font-medium uppercase tracking-tight'>
            <li>
              <a href='#inicio' className='text-light-yellow'>
                início
              </a>
            </li>
            <li>
              <a href='#sobre' className='hover:text-light-yellow'>
                sobre nós
              </a>
            </li>
            <li>
              <a href='#recursos' className='hover:text-light-yellow'>
                recursos
              </a>
            </li>
            <li>
              <a href='#faq' className='hover:text-light-yellow'>
                FAQ
              </a>
            </li>
            <li>
              <a href='#contato' className='hover:text-light-yellow'>
                contato
              </a>
            </li>
          </ul>

          <div className='flex items-center gap-11'>
            <span className='text-light-yellow'>|</span>

            <a
              href=''
              className='text-light-yellow underline uppercase font-medium tracking-wide text-sm'
            >
              criar conta
            </a>

            <Button
              variant='primary'
              size='md'
              width='md'
              borderRadius='rounded'
              className='uppercase font-medium tracking-wide py-3 text-sm'
              as={Link}
              to='/login'
            >
              Entrar
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
