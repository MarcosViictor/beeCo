import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = false, className = '', ...props }, ref) => {
    return (
      <div className={`flex flex-col ${fullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label className="text-[.9rem] font-[400] text-dark-gray mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            px-4 py-3
            border rounded-[8px]
            text-[16px] leading-[24px]
            ${error ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none  focus:ring-1 focus:ring-dark-gray
            placeholder:text-gray-400
            transition-all duration-200
            resize-none
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-[12px] mt-1">{error}</span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
