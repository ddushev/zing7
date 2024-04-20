import NavLink from "./navLink"

function MiddleNav() {
  const linksInfo = [
    { text: "Начало", classes: "p-2 hover:bg-primary hover:text-white rounded text-greenish" },
    { text: "За нас" },
    { text: "Услуги" },
    { text: "Цени" },
    { text: "Как работи" },
    { text: "Контакти" },
  ]
  return (
    linksInfo.map(linkInfo => <NavLink key={linkInfo.text} text={linkInfo.text} classes={linkInfo.classes} />)
  )
}

export default MiddleNav