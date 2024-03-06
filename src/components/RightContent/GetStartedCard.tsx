import Card from '../ui/card'
import { cn } from '@/lib/utils'
import Button from '../ui/button'
import IllusLogo from '../Logo/IllusLogo'
import Arrow from '../Logo/Arrow'

type GetStartedCardProps = {
  className?: string
}

const GetStartedCard = ({ className = '' }: GetStartedCardProps) => {
  return (
    <Card
      className={cn(
        'bg-[#0052FE] text-white px-8 py-8 text-center space-y-5 rounded-xl',
        className
      )}
    >
      <div className="w-full text-wrap">
        <p className="text-2xl font-bold">Get Started with KoinX for FREE</p>
      </div>
      <p className="mb-10">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <center>
        <IllusLogo />
      </center>
      <center>
        <Button className="text-black font-semibold">
          <p>Get Started for FREE</p>
          <Arrow />
        </Button>
      </center>
    </Card>
  )
}

export default GetStartedCard
