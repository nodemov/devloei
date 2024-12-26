import Navbar from "@/components/Navbar"
import { Metadata } from "next"
import './globals.css'

export const metadata: Metadata = {
  title: 'DevLoei Next.js',
  description: 'My App description',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS'],
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  )
}
export default layout