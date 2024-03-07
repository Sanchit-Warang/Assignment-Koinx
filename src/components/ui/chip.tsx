import { cn } from '@/lib/utils'
import { TiArrowSortedUp } from 'react-icons/ti'
import { TiArrowSortedDown } from 'react-icons/ti'
type ChipProps = {
  percentage: number
  className?: string
}

const Chip = ({ className = '', percentage }: ChipProps) => {
  let variant: 'progress' | 'decline' = 'progress'
  if (percentage < 0) {
    variant = 'decline'
  }
  const arrowJSX = () => {
    if (variant === 'progress') {
      return <TiArrowSortedUp />
    } else {
      return <TiArrowSortedDown />
    }
  }

  const styleClass = () => {
    if (variant === 'progress') return 'bg-[#EBF9F4] text-[#14B079]'
    else return 'bg-red-100 text-[#E96975]'
  }

  return (
    <div
      className={cn(
        'p-1 flex items-center space-x-1 rounded-md',
        styleClass(),
        className
      )}
    >
      <div>{arrowJSX()}</div>
      <div>{`${Math.abs(percentage).toFixed(2)}%`}</div>
    </div>
  )
}

export default Chip
