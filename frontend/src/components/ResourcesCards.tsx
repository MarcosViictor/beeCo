import {
  MessageSquare,
  FileText,
  Calendar,
  Clock,
  Shield,
  Bell,
} from 'lucide-react'
import { FeatureCards } from './FeatureCards'

export const ResourcesCards: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={28} />,
      title: 'Chat ao Vivo',
      description:
        'Comunique-se em tempo real com prestadores ou contratantes, eliminando a necessidade de múltiplos canais de comunicação.',
    },
    {
      icon: <FileText size={28} />,
      title: 'Contratos Simplificados',
      description:
        'Feche contratos diretamente pelo chat, sem burocracia ou papelada. Tudo digital e seguro.',
    },
    {
      icon: <Calendar size={28} />,
      title: 'Agendamento Integrado',
      description:
        'Gerencie sua agenda de serviços e compromissos diretamente na plataforma, com lembretes automáticos.',
    },
    {
      icon: <Clock size={28} />,
      title: 'Economia de Tempo',
      description:
        'Reduza o tempo gasto em comunicação e burocracia, focando no que realmente importa: o serviço.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Segurança e Confiança',
      description:
        'Todas as conversas e contratos são protegidos e armazenados com segurança, garantindo transparência.',
    },
    {
      icon: <Bell size={28} />,
      title: 'Resposta Rápida',
      description:
        'Notificações em tempo real garantem que você nunca perca uma mensagem importante ou oportunidade de negócio.',
    },
  ]

  return (
    <div className='container mx-auto py-12 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <FeatureCards
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}