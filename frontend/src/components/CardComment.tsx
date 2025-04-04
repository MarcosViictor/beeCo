import { Star } from 'lucide-react'

interface CardCommentProps {
  name: string
  profession: string
  rating: number
  comment: string
}

export const CardComment = ({ 
  name, 
  profession, 
  rating, 
  comment,
}: CardCommentProps) => {
  return (
    <div className="rounded-[16px] border border-gray-200 p-6 shadow-sm max-w-[400px] w-full">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-500">
            <div className="w-full h-full flex items-center justify-center text-white text-[1rem] font-bold">
                {name.charAt(0)}
            </div>
        </div>
        
        <div className="flex flex-col mb-2">
          <h2 className="text-[1.1rem] font-bold text-dark-gray">{name}</h2>
          <p className=" text-gray-500">{profession}</p>
          
          <div className="flex items-center gap-2 ">
            <span className="text-[1rem] font-medium text-gray-800">{rating.toFixed(1)}</span>
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
          </div>
        </div>
      </div>
      
      <blockquote className="text-[1rem] text-gray-700 leading-relaxed">
        "{comment}"
      </blockquote>
    </div>
  )
}
