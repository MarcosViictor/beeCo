import { Button } from "@/components/Button"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
export const Teste = () => {
  return (
    <div>
      <Header />  
      <div className="w-[50%] flex">
        <Button
          variant="outline"
          borderRadius="rounded"
          size="md"
          width="auto"
          onClick={() => {
            console.log("clicked")
          }}
        >
          Click me
        </Button>
        <Button
        variant="primary"
        width="full"
        size="lg"
        borderRadius="default"
        >
        Click me
        </Button> 
      </div>
      <Footer />
    </div>
  )
}
