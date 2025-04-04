import Button from "./Button"
import { CardFAQ } from "./CardFAQ"
import { DataFAQ } from "@/utils/DataFAQ"

export const FAQ = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-bold text-[2rem]">Perguntas Frequentes</h2>
      </div>

      {DataFAQ.map((item) => (
        <CardFAQ 
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}

      <div className="flex items-center justify-center gap-10 mt-20">
        <Button 
            borderRadius="rounded"
            className="uppercase"
            width="md"
        >
            Criar conta
        </Button>
        <Button 
            variant="outline" 
            className="uppercase"
            width="md"
            borderRadius="rounded"
        >
            Entrar
        </Button>
      </div>
    </section>
  )
}