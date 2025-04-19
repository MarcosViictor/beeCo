import React from 'react';

interface ChatContactProps {
  name: string;
  lastMessage?: string;
  timestamp: string;
  unreadCount?: number;
  avatarUrl?: string;
  isClosed?: boolean;
  onClick?: () => void;
}

export const ChatContact: React.FC<ChatContactProps> = ({
  name,
  lastMessage,
  timestamp,
  unreadCount,
  isClosed = false,
  onClick
}) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer" onClick={onClick}>
      <div className="relative">
       
          
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl text-gray-600">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
      </div>

      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-500 truncate max-w-[250px]">
            {isClosed ? (
              <span className="text-gray-400">CHAT ENCERRADO</span>
            ) : (
              lastMessage || ''
            )}
          </p>
          {unreadCount && !isClosed && (
            <span className="bg-yellow-400 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContact;
