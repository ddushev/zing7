'use client'
import Image from "next/image";
import cx from "classnames";
import { useState } from "react";
import NavLink from "@/components/ui/navLink";
import PrimaryButton from "@/components/ui/primaryButton";


function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Product", "Pricing", "Company", "Resources", "Contact"];
  const buttons = ["Log In", "Try for Free"];
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
              {navLinks.map((text) => <NavLink key={text} text={text} />)}
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex gap-5 text-xs font-bold">
          {buttons.map((text) => <PrimaryButton key={text} text={text} />)}
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
                {navLinks.map((text) => <NavLink key={text} text={text} mobile />)}
              </ul>
            </nav>
            <div className="flex flex-col gap-4 text-xs font-bold">
              {buttons.map((text) => <PrimaryButton key={text} text={text} py="4" />)}
            </div>
          </div>
        </div >
      </div>
    </header>

  )
}

export default Header