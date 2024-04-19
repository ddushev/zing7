function Header() {
  return (
    // Header
    <header className="container mx-auto mt-6" >
      <nav className="flex justify-between text-text">
        <div className="flex items-center font-grotesk font-bold text-2xl tracking-tight">
          <a href="#">Website</a>
        </div>
        <ul className="flex items-center space-x-4">
          <li><a className="p-2 hover:bg-orange-50 rounded text-greenish" href="#">Начало</a></li>
          <li><a className="p-2 hover:bg-orange-50 rounded text-grayish" href="#">За нас</a></li>
          <li><a className="p-2 hover:bg-orange-50 rounded text-grayish" href="#">Услуги</a></li>
          <li><a className="p-2 hover:bg-orange-50 rounded text-grayish" href="#">Цени</a></li>
          <li><a className="p-2 hover:bg-orange-50 rounded text-grayish" href="#">Как работи</a></li>
          <li><a className="p-2 hover:bg-orange-50 rounded text-grayish" href="#">Контакти</a></li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li><a className="p-2 hover:bg-orange-50 rounded text-greenish" href="#">Профил</a></li>
          <div className="border-solid border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-white">
            <li className="font-semibold" ><a href="#">Заявка за пратка</a></li>
          </div>
        </ul>
      </nav>
    </header >
  )
}

export default Header