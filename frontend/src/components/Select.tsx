import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, fullWidth = false, className = '', children, ...props }, ref) => {
    return (
      <div className={`flex flex-col ${fullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label className="text-[.9rem] font-[400] text-dark-gray mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            px-4 py-3
            border rounded-[8px]
            text-[16px] leading-[24px]
            bg-white
            ${error ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-1 focus:ring-dark-gray
            placeholder:text-gray-400
            transition-all duration-200
            ${className}
          `}
          {...props}
        >
          {children}
        </select>
        {error && (
          <span className="text-red-500 text-[12px] mt-1">{error}</span>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
