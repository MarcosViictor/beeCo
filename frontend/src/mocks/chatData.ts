export interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  sender: string;
}

export interface Contact {
  id: string;
  name: string;
  lastMessage?: string;
  timestamp: string;
  unreadCount?: number;
  isOnline: boolean;
  isClosed?: boolean;
  messages: Message[];
}

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Ester Alves',
    lastMessage: 'Olá, gostaria de saber sobre o produto...',
    timestamp: '14:30',
    unreadCount: 3,
    isOnline: true,
    messages: [
      {
        id: '1',
        content: 'Olá, gostaria de saber sobre o produto',
        timestamp: '14:25',
        isOwn: false,
        sender: 'Ester Alves'
      },
      {
        id: '2',
        content: 'Claro! Como posso ajudar?',
        timestamp: '14:27',
        isOwn: true,
        sender: 'Atendente'
      },
      {
        id: '3',
        content: 'Qual o prazo de entrega para São Paulo?',
        timestamp: '14:30',
        isOwn: false,
        sender: 'Ester Alves'
      }
    ]
  },
  {
    id: '2',
    name: 'João Silva',
    timestamp: '12:00',
    isClosed: true,
    isOnline: false,
    messages: [
      {
        id: '4',
        content: 'Obrigado pelo atendimento!',
        timestamp: '12:00',
        isOwn: false,
        sender: 'João Silva'
      }
    ]
  }
];
