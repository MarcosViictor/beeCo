import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { UserCommentsHome } from "@/components/UserCommentsHome"
import { HeroSection } from '@/components/HeroSection'
import { About } from '@/components/About'

export const Home = () => {
  return (
    <>
      <Header />
      <div className='px-30'>
        <HeroSection />
        <UserCommentsHome />
        <About />
      </div>
      <Footer />
    </>
  )
}