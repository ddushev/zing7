function LinksWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      {children}
    </div>
  )
}

export default LinksWrapper