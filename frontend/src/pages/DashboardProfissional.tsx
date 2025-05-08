import { GalleryRoulette } from '@/components/GalleryRoullete'
import { SideMenu } from '@/components/SideMenu'
import { annoucementData } from '@/mock/DataAnnouncement'

export const DashboardProfissional = () => {
  return (
    <>
      <SideMenu />
      <GalleryRoulette />

      <div className='container mx-auto'>
        <div className='bg-white m-auto px-8 py-6 flex flex-col'>
          <div>
            <div className='flex items-center justify-between'>
              <h1 className='py-5 font-bold text-4xl text-gray-800'>
                João Bosco
              </h1>
              <div className='flex'>
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-yellow-400'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <h2>Descrição</h2>
              <h4>
                Sou pedreiro com experiência em construção civil, especializado
                em alvenaria, acabamento, revestimentos e reformas em geral.
              </h4>
              <h4>Serviços oferecidos:</h4>
              <ul>
                <li>✔ Construção de paredes e muros</li>
                <li>✔ Assentamento de pisos e revestimentos</li>
                <li>✔ Reboco e acabamento fino</li>
                <li>✔ Pequenas reformas e reparos</li>
                <li>✔ Manutenção e melhorias residenciais</li>
              </ul>
              <h4>Entre em contato para um orçamento sem compromisso!</h4>
            </div>
          </div>

          <section className='text-gray-600 body-font'>
            <div className='container px-5 py-12 mx-auto'>
              <div className='grid grid-cols-4 gap-4 justify-items-center'>
                {annoucementData.map((item, index) => (
                  <div
                    key={index}
                    className='w-28 h-28 bg-white shadow border rounded flex flex-col items-center justify-center text-center p-2 hover:shadow-md transition'
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className='w-12 h-12 object-cover rounded mb-1'
                    />
                    <h2 className='text-[10px] text-indigo-500 font-semibold'>
                      {item.subtitle}
                    </h2>
                    <h1 className='text-xs font-medium text-gray-900'>
                      {item.title}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
