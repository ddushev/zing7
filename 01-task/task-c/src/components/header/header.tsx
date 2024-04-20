'use client';

import { useState } from "react";
import cx from "classnames";
import MiddleNav from "./middleNav";
import CtaNav from "./ctaNav";
import LinksWrapper from "./linksWrapper";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    // Header
    <header className="container mx-auto mt-6 mb-20 px-4">
      <nav className="flex justify-between px-2 shadow-xl lg:shadow-none">
        <div className="flex items-center font-grotesk font-bold text-2xl p-2 hover:bg-primary hover:text-white rounded tracking-tight">
          <a href="#">Website</a>
        </div>
        {/* Desktop Menu */}
        <LinksWrapper>
          <MiddleNav />
        </LinksWrapper>
        <LinksWrapper>
          <CtaNav />
        </LinksWrapper>
        {/* Mobile menu */}
        <div className="lg:hidden pt-3">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} type="button" className={cx("transition-all w-6 h-6 relative", { 'hamburger': isMobileMenuOpen })}>
            <span className={cx("absolute transition-all top-0 left-0 w-6 h-0.5 bg-primary", { 'hamburger-top': isMobileMenuOpen })}></span>
            <span className={cx("absolute transition-all top-0 left-0 w-6 h-0.5 bg-primary translate-y-[7px]", { 'hamburger-middle': isMobileMenuOpen })}></span>
            <span className={cx("absolute transition-all top-0 left-0 w-6 h-0.5 bg-primary translate-y-[14px]", { 'hamburger-bottom': isMobileMenuOpen })}></span>
          </button>
          <div className={cx("absolute flex-col py-8 mt-10 space-y-6 left-5 right-5 shadow-xl z-10 bg-white", { 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen })}>
            <MiddleNav />
            <CtaNav />
          </div>
        </div >

      </nav >
    </header >
  )
}

export default Header