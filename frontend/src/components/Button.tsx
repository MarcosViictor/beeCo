import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'softYellow' 
  size?: 'sm' | 'md' | 'lg'
  width?: 'auto' | 'md' | 'full' 
  className?: string
  as?: ElementType
  to?: string 
  onClick?: () => void
  borderRadius?: 'default' | 'rounded'
  icon?: React.ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  width = 'auto',
  borderRadius = 'default',
  className = '',
  as: Component = 'button',
  children,
  icon,
  ...props
}: ButtonProps) => {
  const sizeStyles = {
    sm: 'px-3 py-2 text-[14px]',
    md: 'px-5 py-4 text-[14px]',
    lg: 'px-8 py-4 text-[23px]'
  }

  const widthStyles = {
    auto: 'w-auto min-w-[120px]',
    md: "w-[200px]", 
    full: 'w-full'
  }

  const borderRadiusStyles = {
    default: 'rounded-[8px]',
    rounded: 'rounded-[50px]'
  }

  const variantStyles = {
    primary: 'bg-light-yellow text-white hover:bg-hover-yellow',
    outline: 'bg-transparent text-light-yellow border-2 border-light-yellow hover:bg-light-yellow hover:text-white',
    softYellow: 'bg-soft-yellow text-gray-500 font-light hover:bg-soft-yellow'
  }

  return (
    <Component
      className={`
        ${sizeStyles[size]}
        ${widthStyles[width]}
        ${variantStyles[variant]}
        ${borderRadiusStyles[borderRadius]}
        font-poppins
        transition-all
        duration-300 
        flex
        items-center
        justify-center
        text-center
        ${className}
        cursor-pointer
        gap-1
      `}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </Component>
  )
}

export default Button;
