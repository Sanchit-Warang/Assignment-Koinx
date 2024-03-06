import KoinXLogo from '../Logo/KoinXLogo'
import Button from './button'
const NavBar = () => {
  return (
    <div className="sticky top-0 w-full shadow-md bg-white h-[8vh] flex items-center border-borderr border-b px-10 justify-between">
      <KoinXLogo />
      <div className="space-x-5 flex items-center font-semibold">
        <p>Crypto Taxes</p>
        <p>Free Tools</p>
        <p>Resource Center</p>
        <Button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white font-semibold">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default NavBar
