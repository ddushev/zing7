function LinksWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden items-center space-x-4 lg:flex">
      {children}
    </div>
  )
}

export default LinksWrapper