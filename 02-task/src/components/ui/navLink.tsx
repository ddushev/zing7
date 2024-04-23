function NavLink({ text, mobile = false }: { text: string, mobile?: boolean }) {
  return (
    <li>
      <a className={`${mobile ? "block p-4 hover:bg-black hover:text-white rounded"
        : "pb-2 border-black hover:border-b-4"}`} href="#">{text}</a>
    </li>
  )
}

export default NavLink