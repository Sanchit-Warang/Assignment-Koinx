import Card from '../ui/card'
import { FaInfoCircle } from 'react-icons/fa'
import Carousel from '../ui/carousel'
import { FaNewspaper } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'
const SentimentsTab = () => {
  return (
    <Card className="mt-5 space-y-5 animate-in slide-in-from-left duration-300">
      <p className="font-semibold text-2xl">Sentiments</p>
      <div className="space-y-3">
        <p className="flex gap-2 items-center text-lg font-semibold text-[#44475B]">
          Key Events{' '}
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </p>
        <Carousel>
          {[1, 2, 3, 4, 5, 6, 7].map((value, i) => {
            if (value % 2 == 0) {
              return <DataProCard key={i} />
            }
            return <DataNewsCard key={i} />
          })}
        </Carousel>
      </div>
      <div className="space-y-3">
        <p className="flex gap-2 items-center text-lg font-semibold text-[#44475B]">
          Analyst Estimates{' '}
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </p>
        <div className="grid grid-cols-10 gap-10 md:gap-5">
          <div className="col-span-3 h-[5rem] md:col-span-2 md:h-[11rem] flex items-center justify-center bg-[#EBF9F4] rounded-full w-full text-[#0FBA83] text-3xl">
            76%
          </div>
          <div className="col-span-6 md:col-span-7  h-[5rem] md:h-[11rem] flex flex-col justify-center gap-5">
            <div className="grid grid-cols-10 items-center">
              <div className="col-span-2 flex justify-end">
                <div className="mr-2 text-[#7C7E8C]">Buy</div>
              </div>
              <div className="col-span-8 flex gap-1">
                <div className="w-[76%] mt-2 h-2 bg-[#00B386]"></div>
                <div>76%</div>
              </div>
            </div>
            <div className="grid grid-cols-10 items-center">
              <div className="col-span-2 flex justify-end">
                <div className="mr-2 text-[#7C7E8C]">Hold</div>
              </div>
              <div className="col-span-8 flex gap-1">
                <div className="w-[8%] mt-2 h-2 bg-[#C7C8CE]"></div>
                <div>8%</div>
              </div>
            </div>
            <div className="grid grid-cols-10 items-center">
              <div className="col-span-2 flex justify-end">
                <div className="mr-2 text-[#7C7E8C]">Sell</div>
              </div>
              <div className="col-span-8 flex gap-1">
                <div className="w-[16%] mt-2 h-2 bg-[#F7324C]"></div>
                <div>16%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

const DataNewsCard = () => {
  return (
    <Card
      className={`min-w-[26rem] p-4 max-w-[26rem] h-[13rem] flex gap-3 bg-[#E8F4FD]`}
    >
      <div className="w-11 h-11 p-0 text-white bg-[#0082FF] rounded-full flex items-center justify-center">
        <FaNewspaper className="text-lg" />
      </div>
      <div className="space-y-1 w-[80%]">
        <p className="font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </p>
        <p className="font-normal text-[#3E5765]">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </Card>
  )
}

const DataProCard = () => {
  return (
    <Card
      className={`min-w-[26rem] p-4 max-w-[26rem] h-[13rem] flex gap-3 bg-[#EBF9F4]`}
    >
      <div className="w-11 h-11 p-0 text-white bg-[#0FBA83] rounded-full flex items-center justify-center">
        <FaArrowTrendUp className="text-lg" />
      </div>
      <div className="space-y-1 w-[80%]">
        <p className="font-semibold text-sm">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </p>
        <p className="font-normal text-[#3E5765]">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </Card>
  )
}

export default SentimentsTab
