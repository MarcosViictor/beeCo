import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  width?: 'auto' | 'full'
  className?: string
  as?: ElementType
  to?: string 
  onClick?: () => void
  borderRadius?: 'default' | 'rounded'
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  width = 'auto',
  borderRadius = 'default',
  className = '',
  as: Component = 'button',
  children,
  ...props
}: ButtonProps) => {
  const sizeStyles = {
    sm: 'px-3 py-2 text-[14px]',
    md: 'px-5 py-4 text-[14px]',
    lg: 'px-8 py-4 text-[23px]'
  }

  const widthStyles = {
    auto: 'w-auto min-w-[120px]',
    full: 'w-full'
  }

  const borderRadiusStyles = {
    default: 'rounded-[8px]',
    rounded: 'rounded-[50px]'
  }

  const variantStyles = {
    primary: 'bg-[#FFC059] text-white hover:bg-[#e5ac4f]',
    outline: 'bg-transparent text-[#FFC059] border-2 border-[#FFC059] hover:bg-[#FFC059] hover:text-white'
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
      `}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button;
