import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { UserComments } from "@/components/UserCommentsHome"
export const Home = () => {
  return (
    <div>
        <Header/>
        <UserComments/>
        <Footer/>
    </div>
  )
}