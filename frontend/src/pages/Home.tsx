import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'

export const Home = () => {
  return (
    <>
      <Header />
      <div className='px-30'>
        <HeroSection />
      </div>
      <Footer />
    </>
  )
}
