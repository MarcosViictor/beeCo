import { Star } from 'lucide-react'

interface ProfessionalCardProps {
    img: string | undefined;
    name: string;
    rate: number;
    profession: string;
    typePayment: string;
    valueService: number;
}


export const ProfessionalCard = ({img, name, rate, profession, typePayment, valueService} : ProfessionalCardProps) => {
    return(
        <>
            <div className='w-[300px] cursor-pointer text-dark-gray hover:shadow-lg transition-all duration-300 rounded-[10px]'>
                <figure>
                    <img src={img} alt="" />
                </figure>
                <div className='bg-gray-100/45 px-4 py-5 w-full flex flex-col items-start rounded-[10px] gap-2'>
                    <div className="flex justify-between items-center w-full">
                        <h4 className='text-[1.3rem] font-semibold '>
                            {name}
                        </h4>
                        <p className='flex gap-1 items-center'>
                                {rate}
                                <span>
                                    <Star className="fill-yellow-400 text-yellow-400" size={20} />
                                </span>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <p className='text-[.8rem] border-[#fa9c058d] text-[#f9a826f0] border-[1px] font-semibold rounded-2xl px-2 py-1 w-auto bg-[#ffbf594a]'>
                            {profession}
                        </p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <p className='text-[0.9rem] text-gray-600'>{typePayment}</p>
                        <p className='font-semibold text-[1.3rem]'>
                            R${valueService}
                        </p>
                    </div>
            
                </div>

            </div>

            
        </>
    )
}