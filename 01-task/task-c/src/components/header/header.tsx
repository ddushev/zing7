'use client';

import { useState } from "react";
import cx from "classnames";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    // Header
    <header className="container mx-auto mt-6 px-4">
      <nav className="flex justify-between">
        <div className="flex items-center font-grotesk font-bold text-2xl p-2 hover:bg-primary hover:text-white rounded tracking-tight">
          <a href="#">Website</a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden items-center space-x-4 lg:flex">
          <a className="p-2 hover:bg-primary hover:text-white rounded text-greenish" href="#">Начало</a>
          <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">За нас</a>
          <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Услуги</a>
          <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Цени</a>
          <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Как работи</a>
          <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Контакти</a>
        </div>
        <div className="hidden items-center space-x-4 lg:flex">
          <a className="p-2 hover:bg-primary hover:text-white rounded text-greenish" href="#">Профил</a>
          <a className="font-semibold border-solid border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-white" href="#">Заявка за пратка</a>
        </div>
        {/* Mobile menu */}
        <div className="lg:hidden pt-3">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} type="button" className={cx("transition-all w-6 h-6 relative", { 'hamburger': isMobileMenuOpen })}>
            <span className={cx("absolute transition-all top-0 left-0 w-6 h-0.5 bg-primary", { 'hamburger-top': isMobileMenuOpen })}></span>
            <span className={cx("absolute transition-all top-0 left-0 w-6 h-0.5 bg-primary translate-y-[7px]", { 'hamburger-middle': isMobileMenuOpen })}></span>
            <span className={cx("absolute transition-all top-0 left-0 w-6 h-0.5 bg-primary translate-y-[14px]", { 'hamburger-bottom': isMobileMenuOpen })}></span>
          </button>
          <div className={cx("absolute flex-col py-8 space-y-6 left-6 right-6", { 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen })}>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-greenish" href="#">Начало</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">За нас</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Услуги</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Цени</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Как работи</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Контакти</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-greenish" href="#">Профил</a>
            <a className="font-semibold border-solid border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-white" href="#">Заявка за пратка</a>
          </div>
        </div >

      </nav >
    </header >
  )
}

export default Header