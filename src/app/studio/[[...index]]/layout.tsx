export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio Dashboard',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {children}
    </div>
  )
}
