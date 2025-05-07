import {
  MessageSquare,
  FileText,
  Calendar,
  Clock,
  Shield,
  Bell,
} from 'lucide-react'
import { FeatureCards } from './FeatureCards'
import { dataCards } from '@/mock/DataCards'

const iconsMap = {
  MessageSquare: <MessageSquare size={28} />,
  FileText: <FileText size={28} />,
  Calendar: <Calendar size={28} />,
  Clock: <Clock size={28} />,
  Shield: <Shield size={28} />,
  Bell: <Bell size={28} />,
}

export const ResourcesCards: React.FC = () => {
  return (
    <div className='py-12 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dataCards.map((feature, index) => (
          <FeatureCards
            key={index}
            icon={iconsMap[feature.icon as keyof typeof iconsMap]}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}