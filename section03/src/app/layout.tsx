import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Link from 'next/link'
import style from './layout.module.css'

export const metadata: Metadata = {
  title: 'Bite Books',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={'/'}>📚 BITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @Jade</footer>
        </div>
      </body>
    </html>
  )
}
