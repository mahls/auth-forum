import { Inter } from 'next/font/google'
import {Main} from '../components/Main.tsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-stone-900 ${inter.className}`}>
      <Main/>
    </main>
  )
}
