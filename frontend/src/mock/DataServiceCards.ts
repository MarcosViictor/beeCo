import { ServiceCardProps } from '@/components/ServiceCard'

import {
  Laptop,
  Coffee,
  Plug,
  Wifi,
  Waves,
  Wrench,
  Shirt,
  MoreHorizontal,
} from 'lucide-react'

export const services: ServiceCardProps[] = [
  { title: 'Assistência técnica', Icon: Laptop },
  { title: 'Limpeza doméstica', Icon: Coffee },
  { title: 'Eletricista residencial', Icon: Plug },
  { title: 'Manutenção de internet', Icon: Wifi },
  { title: 'Piscineiro', Icon: Waves },
  { title: 'Consertos em geral', Icon: Wrench },
  { title: 'Lavanderia', Icon: Shirt },
  { title: 'Outros serviços domésticos', Icon: MoreHorizontal },
]
