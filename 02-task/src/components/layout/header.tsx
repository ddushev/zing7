'use client'
import cx from "classnames";
import { useState } from "react";
import NavLink from "@/components/ui/navLink";
import PrimaryButton from "@/components/ui/primaryButton";
import CompanyLogo from "@/components/ui/companyLogo";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Product", "Pricing", "Company", "Resources", "Contact"];
  return (
    <header className="bg-zinc-100">
      <div className="outer-container mx-auto pb-10 py-5 lg:pb-20">
        <div className="container-grid shadow-xl md:shadow-none">
          <a className="col-start-1" href="#">
            <CompanyLogo />
          </a>
          {/* Desktop Menu */}
          <nav className="hidden col-start-3 col-span-5 items-center md:flex">
            <ul className="flex text-sm font-medium gap-4 lg:gap-9">
              {navLinks.map((text) => <NavLink key={text} text={text} />)}
            </ul>
          </nav>
          <div className="hidden mr-4 col-end-13 col-span-4 justify-end gap-5 text-xs font-bold md:flex">
            <PrimaryButton text="Log In" bgColor="white" />
            <PrimaryButton text="Try For Free" />
          </div>
          {/* Mobile menu */}
          <div className="col-end-13 justify-self-end content-center mr-4 md:hidden">
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
                <PrimaryButton text="Log In" bgColor="white" paddingY="4" />
                <PrimaryButton text="Try For Free" paddingY="4" />
              </div>
            </div>
          </div >
        </div>

      </div>
    </header>

  )
}

export default Header