'use client'
import { cn } from '@/lib/utils'

interface cardProps {
  children: React.ReactNode
  className?: string
}
const Card = ({ children, className = '' }: cardProps) => {
  return (
    <div className={cn('bg-white rounded-lg p-6 shadow-md', className)}>
      {children}
    </div>
  )
}

export default Card
