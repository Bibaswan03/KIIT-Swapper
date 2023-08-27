import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KIIT Swapper',
  description: 'An interactive platform for section swapping',
}

export default async function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
