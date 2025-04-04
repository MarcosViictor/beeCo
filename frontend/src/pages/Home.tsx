import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { UserCommentsHome } from "@/components/UserCommentsHome"
import { HeroSection } from '@/components/HeroSection'
import { FAQ } from '@/components/FAQ'
export const Home = () => {
  return (
    <>
      <Header />
      <div className='px-30 py-30 gap-30 flex flex-col'>
        <HeroSection />
        <UserCommentsHome />
        <FAQ />
      </div>
      <Footer />
    </>
  )
}
