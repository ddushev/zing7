function Header() {
  return (
    // Header
    <header className="container relative mx-auto mt-6 px-4">
      <nav className="flex justify-between text-text">
        <div className="flex items-center font-grotesk font-bold text-2xl tracking-tight">
          <a href="#">Website</a>
        </div>
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
          <div className="border-solid border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-white">
            <a className="font-semibold" href="#">Заявка за пратка</a>
          </div>
        </div>

      </nav>
    </header >
  )
}

export default Header