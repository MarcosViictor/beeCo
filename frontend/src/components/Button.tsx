import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'large';
  width?: 'default' | 'full';
  children: React.ReactNode;
  borderRadius?: 'default' | 'rounded';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  width = 'default',
  borderRadius = 'default',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'font-poppins transition-all duration-300 cursor-pointer';
  
  const variantStyles = {
    default: 'bg-[#FFC059] text-white hover:bg-[#e5ac4f]',
    outline: 'bg-transparent text-[#FFC059] border-2 border-[#FFC059] hover:bg-[#FFC059] hover:text-white'
  };

  const sizeStyles = {
    default: 'px-5 py-2.5 text-[18px]',
    large: 'px-8 py-4 text-[23px]'
  };

  const widthStyles = {
    default: 'w-auto min-w-[120px]',
    full: 'w-full'
  };

  const borderRadiusStyles = {
    default: 'rounded-[8px]',
    rounded: 'rounded-[50px]'
  };

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyles[width]}
    ${borderRadiusStyles[borderRadius]}
    ${className || ''}
  `.trim();

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
