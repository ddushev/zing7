function Header() {
  return (
    // Header
    <header className="container mx-auto mt-6 px-4">
      <nav className="flex justify-between">
        <div className="flex items-center font-grotesk font-bold text-2xl tracking-tight">
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
        <div className="lg:hidden">
          <button type="button" className="transition-all w-6 h-6 relative lg:hidden">
            <span className="absolute top-0 left-0 w-6 h-0.5 bg-primary transition-all rotate-0"></span>
            <span className="absolute top-0 left-0 w-6 h-0.5 bg-primary transition-all rotate-0 translate-y-2"></span>
            <span className="absolute top-0 left-0 w-6 h-0.5 bg-primary transition-all rotate-0 translate-y-4"></span>
          </button>
          <div className="absolute flex flex-col py-8 space-y-6 left-6 right-6">
            <a className="p-2 hover:bg-primary hover:text-white rounded text-greenish" href="#">Начало</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">За нас</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Услуги</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Цени</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Как работи</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-grayish" href="#">Контакти</a>
            <a className="p-2 hover:bg-primary hover:text-white rounded text-greenish" href="#">Профил</a>
            <a className="font-semibold border-solid border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-white" href="#">Заявка за пратка</a>
          </div>
        </div>

      </nav>
    </header >
  )
}

export default Header