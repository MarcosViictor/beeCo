import Button from "./Button"
import { CardFAQ } from "./CardFAQ"
import { DataFAQ } from "@/utils/DataFAQ"

export const FAQ = () => {
  return (
    <section id="faq" className="w-full flex flex-col items-center justify-center gap-10 py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="font-semibold text-[2rem]">Perguntas Frequentes</h2>
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