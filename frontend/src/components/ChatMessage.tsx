import React from 'react';

interface ChatMessageProps {
  message: string;
  timestamp: string;
  isOwn?: boolean;
  sender?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  timestamp,
  isOwn = false,
  sender
}) => {
  return (
    <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} my-2`}>
      {!isOwn && sender && (
        <span className="text-sm text-gray-600 mb-1">
          {sender}
        </span>
      )}
      <div className={`rounded-xl px-3 py-2 max-w-[70%] break-words shadow-sm
        ${isOwn ? 'bg-green-100' : 'bg-white'}`}>
        {message}
      </div>
      <span className="text-xs text-gray-400 mt-1">
        {timestamp}
      </span>
    </div>
  );
};

export default ChatMessage;
