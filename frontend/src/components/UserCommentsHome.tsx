import { CardComment } from "./CardComment"
import { comments } from "@/utils/Comments"

export const UserCommentsHome = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-bold text-[2rem]">O Que Nossos Usuários Dizem</h2>
        <p className="text-[1rem] text-gray-500 w-[600px] text-center">Milhares de prestadores e contratantes já transformaram sua forma de trabalhar com o BeeCo.</p>
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
  )
}
