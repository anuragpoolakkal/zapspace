// import NavBar from '@/src/components/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: [
    "200", "300", "400", "500", "600", "700", "800", "900"
  ], subsets: ['latin']
})

export const metadata = {
  title: 'Zapspace',
  description: 'Zapspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}