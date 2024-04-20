import NavLink from "./navLink"

function CtaNav() {
  const linksInfo = [
    { text: "Профил", classes: "p-2 hover:bg-primary hover:text-white rounded text-greenish" },
    { text: "Заявка за пратка", classes: "font-semibold border-solid border-2 border-primary rounded-lg p-2 hover:bg-primary hover:text-white" },

  ]
  return (
    linksInfo.map(linkInfo => <NavLink key={linkInfo.text} text={linkInfo.text} classes={linkInfo.classes} />)
  )
}

export default CtaNav