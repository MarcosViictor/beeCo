import { ResourcesCards } from './ResourcesCards'

export const Resources = () => {
  return (
    <section className='bg-white py-14'>
      <div className='flex flex-col gap-8 justify-center items-center'>
        <h2 className='font-semibold text-4xl text-dark-gray'>
          Recursos que Transforman
        </h2>
        <p className='text-dark-gray max-w-[500px] text-center'>
          O BeeCo oferece ferramentas poderosas para simplificar a comunicação e
          o processo de contratação de serviços.
        </p>
        <ResourcesCards />
      </div>
    </section>
  )
}