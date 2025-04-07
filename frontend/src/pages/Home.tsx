import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Workers from "@/assets/workers.png";
import Button from "@/components/Button";
import { CardComment } from "@/components/CardComment";
import { ResourcesCards } from "@/components/ResourcesCards";
import { CardFAQ } from "@/components/CardFAQ";

import { DataFAQ } from "@/mock/DataFAQ";
import { comments } from "@/mock/Comments";

import Providers from "@/assets/providers.png";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="py-30 gap-30 flex flex-col">
        <section className="flex justify-center items-center gap-60 px-10 bg-off-white">
          <div className="flex gap-6 flex-col">
            <h1 className="font-[400] text-[4rem] text-dark-gray leading-[2.5rem]">
              <span className="font-bold">Bee</span>Co
            </h1>

            <p className="text-dark-gray text-[1.2rem] leading-[1.5rem] flex flex-col w-[450px] tracking-wide">
              O BeeCo revoluciona a comunicação entre prestadores de serviço e
              contratantes com chat ao vivo e contratos simplificados.
            </p>

            <div
              className="flex gap-5"
            >
              <Button width="md" variant="outline" className="uppercase">
                experimentar agora
              </Button>
            </div>
          </div>

          <div>
            <img src={Workers} alt="Ilustração de Trabalhadores" />
          </div>
        </section>
        
        <section className="w-full h-full flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-semibold text-[2rem]">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-[1rem] text-gray-500 w-[600px] text-center">
              Milhares de prestadores e contratantes já transformaram sua forma
              de trabalhar com o BeeCo.
            </p>
          </div>
          <div className="flex gap-3">
            {comments.map((comment) => (
              <CardComment
                key={comment.name}
                name={comment.name}
                profession={comment.profession}
                rating={comment.rating}
                comment={comment.comment}
              />
            ))}
          </div>
        </section>

        <section
          id="sobre"
          className="flex gap-18 justify-center bg-off-white py-10"
        >
          <div>
            <img
              src={Providers}
              className="w-150"
              alt="Ilustração de prestadores"
            />
          </div>
          <div className="flex flex-col gap-8 mt-15">
            <h2 className="font-semibold leading-13.5 tracking-wide text-dark-gray text-6xl max-w-130">
              Como o BeeCo Funciona,{" "}
              <span className="text-light-yellow">Um processo simples</span>
            </h2>
            <p className="text-dark-gray max-w-[550px]">
              Cadastre-se como prestador de serviço ou contratante em apenas
              alguns minutos, encontre prestadores ou contratantes ideais para
              suas necessidades, utilize nosso chat ao vivo para discutir
              detalhes, esclarecer dúvidas e negociar valores e Formalize o
              acordo com um clique, diretamente pelo chat, sem burocracia.
            </p>

            <Button
              variant="primary"
              size="md"
              width="md"
              borderRadius="rounded"
              className="uppercase font-medium tracking-wide py-3 text-sm"
            >
              começar agora
            </Button>
          </div>
        </section>
        <section id="recursos" className="bg-white py-14">
          <div className="flex flex-col gap-8 justify-center items-center">
            <h2 className="font-semibold text-4xl text-dark-gray">
              Recursos que Transforman
            </h2>
            <p className="text-dark-gray max-w-[500px] text-center">
              O BeeCo oferece ferramentas poderosas para simplificar a
              comunicação e o processo de contratação de serviços.
            </p>
            <ResourcesCards />
          </div>
        </section>
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center gap-10 py-10"
        >
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
            <Button borderRadius="rounded" className="uppercase" width="md">
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
      </div>
      <Footer />
    </>
  );
};
