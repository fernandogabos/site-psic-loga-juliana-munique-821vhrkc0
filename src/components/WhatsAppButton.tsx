import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511995703646"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex min-h-[56px] min-w-[56px] animate-float items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Agendar via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
