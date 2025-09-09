export const metadata = {
  title: 'Sanity Studio',
  description: 'Content Management Studio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}