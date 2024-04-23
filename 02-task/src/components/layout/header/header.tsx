'use-client'
import Image from "next/image";

function Header() {
  return (
    <header className="bg-zinc-100 py-6">
      <div className="flex justify-center mx-auto gap-16 lg:container xl:gap-72">
        <div className="flex items-center gap-8 xl:gap-24">
          <a className="flex-none" href="#">
            <Image src="/Roooby.svg" width={95} height={28} alt="company-logo" />
          </a>
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
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 text-xs font-bold">
          <button className="px-5 py-2 rounded bg-white hover:bg-primary hover:text-white" type="button">
            Log In
          </button>
          <button className="px-5 py-2 rounded bg-white hover:bg-primary hover:text-white" type="button">
            Try for Free
          </button>
        </div>
      </div>
    </header>

  )
}

export default Header