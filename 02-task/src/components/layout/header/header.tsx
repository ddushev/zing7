'use client'
import Image from "next/image";
import cx from "classnames";
import { useState } from "react";


function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-100 py-6 shadow-xl md:shadow-none">
      <div className="container max-w-[80%] flex justify-between mx-auto gap-16 md:max-w-[100%] md:justify-center xl:gap-72">
        <div className="flex items-center gap-8 xl:gap-24">
          <a className="flex-none" href="#">
            <Image src="/Roooby.svg" width={95} height={28} alt="company-logo" />
          </a>
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex text-sm font-medium gap-4 lg:gap-9">
              <li><a className="pb-2 border-black hover:border-b-4" href="#">Product</a></li>
              <li><a className="pb-2 border-black hover:border-b-4" href="#">Pricing</a></li>
              <li><a className="pb-2 border-black hover:border-b-4" href="#">Company</a></li>
              <li><a className="pb-2 border-black hover:border-b-4" href="#">Resources</a></li>
              <li><a className="pb-2 border-black hover:border-b-4" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex gap-5 text-xs font-bold">
          <button className="px-5 py-2 rounded bg-white hover:bg-primary hover:text-white" type="button">
            Log In
          </button>
          <button className="px-5 py-2 rounded bg-white hover:bg-primary hover:text-white" type="button">
            Try for Free
          </button>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} type="button" className={cx("transition-all w-6 h-6 relative", { 'hamburger': isMobileMenuOpen })}>
            <span className={cx("hamburger-span", { 'hamburger-top': isMobileMenuOpen })}></span>
            <span className={cx("hamburger-span translate-y-[7px]", { 'hamburger-middle': isMobileMenuOpen })}></span>
            <span className={cx("hamburger-span translate-y-[14px]", { 'hamburger-bottom': isMobileMenuOpen })}></span>
          </button>
          <div className={cx("absolute flex-col gap-4 p-4 mt-10 left-5 right-5 shadow-xl z-10 bg-zinc-100", { 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen })}>
            <nav>
              <ul className="flex flex-col text-sm font-medium">
                <li><a className="block p-4 hover:bg-black hover:text-white rounded" href="#">Product</a></li>
                <li><a className="block p-4 hover:bg-black hover:text-white rounded" href="#">Pricing</a></li>
                <li><a className="block p-4 hover:bg-black hover:text-white rounded" href="#">Company</a></li>
                <li><a className="block p-4 hover:bg-black hover:text-white rounded" href="#">Resources</a></li>
                <li><a className="block p-4 hover:bg-black hover:text-white rounded" href="#">Contact</a></li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4 text-xs font-bold">
              <button className="px-5 py-4 rounded bg-white hover:bg-primary hover:text-white" type="button">
                Log In
              </button>
              <button className="px-5 py-4 rounded bg-white hover:bg-primary hover:text-white" type="button">
                Try for Free
              </button>
            </div>
          </div>
        </div >
      </div>
    </header>

  )
}

export default Header