import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { UserCommentsHome } from '@/components/UserCommentsHome'
import { HeroSection } from '@/components/HeroSection'
import { FAQ } from '@/components/FAQ'
import { About } from '@/components/About'
import { Resources } from '@/components/Resources'

export const Home = () => {
  return (
    <>
      <Header />
      <div className='py-30 gap-30 flex flex-col'>
        <HeroSection />
        <UserCommentsHome />
        <About />
        <Resources />
        <FAQ />
      </div>
      <Footer />
    </>
  )
}