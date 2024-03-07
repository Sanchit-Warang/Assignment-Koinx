import { Children, useRef } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
const Carousel = ({ children }: { children: React.ReactNode }) => {
  const showsRef = useRef<HTMLDivElement>(null)
  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!showsRef.current) return

    const { scrollLeft, clientWidth } = showsRef.current
    const offset =
      direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

    showsRef.current.scrollTo({ left: offset, behavior: 'smooth' })

    if (scrollLeft === 0 && direction === 'left') {
      showsRef.current.scrollTo({
        left: showsRef.current.scrollWidth,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="group relative   flex items-center">
      <div
        onClick={() => scrollToDirection('left')}
        className="btn-scroll-right mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[30] "
      >
        <FaChevronLeft className="text-[15px]"></FaChevronLeft>
      </div>

      <div
        onClick={() => scrollToDirection('right')}
        className="btn-scroll-right mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[30] right-0"
      >
        <FaChevronRight className=""></FaChevronRight>
      </div>

      <div
        ref={showsRef}
        className="carousel-container  mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
      >
        {children}
      </div>
    </div>
  )
}

export default Carousel
