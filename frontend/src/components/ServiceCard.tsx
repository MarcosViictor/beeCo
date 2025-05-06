import { LucideIcon } from 'lucide-react'

export interface ServiceCardProps {
  title: string
  Icon: LucideIcon
  iconColor?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  Icon,
  iconColor = '#F6B445',
}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow cursor-pointer min-w-[180px]'>
      <div className='p-3 bg-yellow-50 rounded-full'>
        <Icon size={24} color={iconColor} strokeWidth={1.5} />
      </div>
      <h3 className='text-center text-sm font-medium'>{title}</h3>
    </div>
  )
}
