import NavBar from './components/navbar'
import Background from './components/background'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const etsfont = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'ETS | Homepage',
  description: 'Welcome to the unofficial website Emerging Technologies Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={etsfont.className}>
      <body className='bg-gradient-to-br bg-e6palette-600'>
        <NavBar/>
        <Background/>
        {children}
        </body>
    </html>
  )
}
