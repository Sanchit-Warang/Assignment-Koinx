'use client'
import KoinXLogo from '../Logo/KoinXLogo'
import Button from './button'
import HamburgerLogo from '../Logo/HamburgerLogo'
import { useState } from 'react'
const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='sticky z-40 top-0'>
      <header className=" w-full shadow-md bg-white h-[8vh] flex items-center border-borderr border-b px-10 justify-between">
        <KoinXLogo />
        <nav className="hidden md:block">
          <ul className="space-x-5 flex items-center font-semibold">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
            <li>
              <Button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white font-semibold">
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden" onClick={() => setOpen(!open)}>
          <HamburgerLogo />
        </div>
      </header>
      {open && (
        <div className="absolute z-50  bg-white w-full flex justify-center animate-in slide-in-from-top duration-300 animate-out slide-out-from-left duration-300">
          <ul className="font-semibold space-y-2 my-3 divide-y-2 w-full">
            <center>
              <li className="py-1">Crypto Taxes</li>
            </center>
            <center>
              <li className="py-1">Free Tools</li>
            </center>
            <center>
              <li className="py-1">Resource Center</li>
            </center>
            <center>
              <li className="py-1">
                <Button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white font-semibold">
                  Get Started
                </Button>
              </li>
            </center>
          </ul>
        </div>
      )}
    </header>
  )
}
export default NavBar
