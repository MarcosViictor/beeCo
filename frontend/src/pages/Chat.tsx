import { useState } from "react"
import { mockContacts } from "@/mocks/chatData"
import type { Contact } from "@/mocks/chatData"
import Button from "@/components/Button"
import ChatContact from "@/components/ChatContact"
import ChatMessage from "@/components/ChatMessage"
import ChatMessageHeader from "@/components/ChatMessageHeader"
import { Input } from "@/components/Input"
import { SideMenu } from "@/components/SideMenu"
import { Send } from "lucide-react"

import ChatSVG from '@/assets/chat.svg'

export const Chat = () => {
    const [contacts, setContacts] = useState<Contact[]>(mockContacts)
    const [activeContact, setActiveContact] = useState<Contact | null>(null)
    const [newMessage, setNewMessage] = useState('')

    const handleContactClick = (contact: Contact) => {
        setActiveContact(contact)
    }

    const handleSendMessage = () => {
        if (!newMessage.trim() || !activeContact) return

        const newMsg = {
            id: Date.now().toString(),
            content: newMessage,
            timestamp: new Date().toLocaleTimeString(),
            isOwn: true,
            sender: 'Atendente'
        }

        setContacts(contacts.map(c => 
            c.id === activeContact.id 
                ? { ...c, messages: [...c.messages, newMsg], lastMessage: newMessage }
                : c
        ))
        setNewMessage('')
    }

    return (
        <>
            <SideMenu />
            <div className="flex ml-25 mr-18 py-7 h-screen justify-center">
                <div className="flex flex-col pr-10 border-r-2 border-gray-300 w-[400px] gap-2">
                    <Input
                        placeholder="Pesquisar"
                    />
                    {contacts.map(contact => (
                        <ChatContact 
                            key={contact.id}
                            {...contact}
                            onClick={() => handleContactClick(contact)}
                        />
                    ))}
                </div>
                
                <div className="flex flex-col w-[70%] pl-10 justify-between">
                    {activeContact ? (
                        <>
                            <div>
                                <ChatMessageHeader 
                                    {...activeContact}
                                />
                                <div className="flex flex-col gap-2 mt-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-3">
                                    {activeContact.messages.map(message => (
                                        <ChatMessage
                                            key={message.id}
                                            message={message.content}
                                            timestamp={message.timestamp}
                                            isOwn={message.isOwn}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-full gap-2 mt-4">
                                <Input
                                    placeholder="Digite uma mensagem..."
                                    fullWidth={true}
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <Button
                                    icon={<Send />}
                                    size="sm"
                                    onClick={handleSendMessage}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full gap-4">
                            <img src={ChatSVG} alt="" />
                            <h3 className="text-3xl ">Inicie uma conversa!</h3>
                            <p className="text-center font-light text-gray-600 w-[25rem]">Procure serviços e inicia uma conversa! 
                            Tire suas dúvidas e resolva seus problemas.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}