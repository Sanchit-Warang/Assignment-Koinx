import Card from '../ui/card'
import Button from '../ui/button'
import Arrow from '../Logo/Arrow'
import Image from 'next/image'
const AboutTab = ({ coinName }: { coinName: string }) => {
  return (
    <Card className="mt-5 space-y-5 animate-in slide-in-from-left duration-300">
      <p className="font-semibold text-2xl">About {coinName}</p>
      <div className="space-y-5 border-b-2 pb-3">
        <p className="font-bold text-lg">What is {coinName}?</p>
        <p className="font-medium text-[#3E424A]">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC
        </p>
      </div>
      <div className="space-y-5 border-b-2 pb-3">
        <p className="font-bold text-lg">Lorem ipsum dolor sit amet</p>
        <p className="font-medium text-[#3E424A]">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="font-medium text-[#3E424A]">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="font-medium text-[#3E424A]">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
      </div>
      <div className="space-y-5 border-b-2 pb-3">
        <p className="font-semibold text-2xl">Already Holding {coinName}?</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
          <CalculateCard variant={1} />
          <CalculateCard variant={2} />
        </div>
      </div>
      <p className="font-medium text-[#3E424A]">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </Card>
  )
}

const CalculateCard = ({ variant }: { variant: 1 | 2 }) => {
  let bg = ''
  let link = ''
  let text = ''
  if (variant === 1) {
    bg = 'bg-gradient-to-br from-green-400 to-blue-800'
    link = '/phone.jpeg'
    text = 'Calculate your Profits'
  } else {
    bg = 'bg-gradient-to-br from-[#FF9865] to-[#EF3031]'
    link = '/phone2.jpeg'
    text = 'Calculate your tax liability'
  }
  return (
    <Card className={bg}>
      <div className="grid grid-cols-7 gap-3">
        <div className="col-span-3">
          <Image
            className="rounded-lg h-[128px] w-[128px]"
            src={link}
            width={128}
            height={128}
            alt={'phone'}
            objectFit="cover"
          />
        </div>
        <div className="col-span-4 space-y-8">
          <p className="text-white font-bold text-xl">{text}</p>
          <Button className="text-black font-semibold">
            <p>Check Now</p>
            <Arrow />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default AboutTab
