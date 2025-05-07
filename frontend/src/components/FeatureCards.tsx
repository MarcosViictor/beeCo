import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export const FeatureCards = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className='flex flex-col items-center text-center px-6 py-6 bg-white rounded-xl shadow-sm'>
      <div className='text-light-yellow text-3xl mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold text-dark-gray mb-2'>{title}</h3>
      <p className='text-gray-600 text-sm'>{description}</p>
    </div>
  )
}