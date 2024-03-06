'use client'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        'py-1 px-4 bg-white rounded-lg flex items-center gap-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
