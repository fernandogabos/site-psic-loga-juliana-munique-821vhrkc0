import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
      <Header />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
