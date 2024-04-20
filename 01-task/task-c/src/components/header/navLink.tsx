function NavLink({ text, classes = "p-2 hover:bg-primary hover:text-white rounded text-grayish" }: { text: string, classes?: string }) {
  return (
    <a className={classes} href="#">{text}</a>
  )
}

export default NavLink