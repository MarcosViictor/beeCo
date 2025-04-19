import React from 'react';

interface ChatMessageHeaderProps {
  name: string;
  isOnline?: boolean;
  avatarUrl?: string;
  onClose?: () => void;
}

export const ChatMessageHeader: React.FC<ChatMessageHeaderProps> = ({
  name,
  isOnline = false,
  avatarUrl,
  onClose
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-[10px] shadow-md bg-white border-b border-gray-200">
      <div className="flex items-center">
        <div className="relative">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-lg text-gray-600">{name.charAt(0).toUpperCase()}</span>
            )}
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>
        
        <div className="ml-3">
          <h2 className="font-medium text-gray-900">{name}</h2>
          <span className="text-sm text-gray-500">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
        </button>
      </div>
    </div>
  );
};

export default ChatMessageHeader;
