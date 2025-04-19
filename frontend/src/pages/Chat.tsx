import Button from "@/components/Button"
import ChatContact from "@/components/ChatContact"
import ChatMessage from "@/components/ChatMessage"
import ChatMessageHeader from "@/components/ChatMessageHeader"
import { Input } from "@/components/Input"
import { SideMenu } from "@/components/SideMenu"
import { Send } from "lucide-react"

export const Chat = () => {
    return (
        <>
            <SideMenu />
            <div className="flex mx-25 py-7 h-screen ">
                <div className="flex flex-col pr-10 border-r-2 border-gray-300 w-[400px] gap-2">
                    <Input
                        placeholder="Pesquisar"
                    />
                    <ChatContact 
                        name="Luis"
                        timestamp="12/12/32"
                        lastMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et voluptas reprehenderit alias qui ipsa eaque illo ipsum possimus voluptates? Vero exercitationem dolorum nisi vitae itaque iure magnam sapiente venia"
                        unreadCount={3}

                    />
                    <ChatContact 
                        name="Luis"
                        timestamp="12/12/32"
                        isClosed={true}
                    />
                </div>
                <div className="flex flex-col w-[70%] pl-10 justify-between">
                    <div className="">
                        <ChatMessageHeader 
                            name="Luis"
                            isOnline={true}
                        />
                        <div className="flex flex-col gap-2 mt-2">
                            <ChatMessage
                                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et voluptas reprehenderit alias qui ipsa eaque illo ipsum possimus voluptates? Vero exercitationem dolorum nisi vitae itaque iure magnam sapiente venia'
                                timestamp='12/12/12'
                                isOwn={true}
                            />
                             <ChatMessage
                                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et voluptas reprehenderit alias qui ipsa eaque illo ipsum possimus voluptates'
                                timestamp='12/12/12'
                            />
                            <ChatMessage
                                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et voluptas reprehenderit alias qui ipsa eaque illo ipsum possimus voluptates'
                                timestamp='12/12/12'
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-2">
                        <Input
                            placeholder="Digite uma mensagem..."
                            fullWidth={true}
                        />
                        <Button
                            icon={<Send />}
                            size="sm"
                        />
                        
                    </div>
                </div>
            </div>
        </>
    )
}