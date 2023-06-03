import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const etsfont = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'ETS',
  description: 'Welcome to the unofficial website Emerging Technologies Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={etsfont.className}>
      <body className='dark: bg-foggy_purple-700'>{children}</body>
    </html>
  )
}
