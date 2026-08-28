import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { whatsappUrl } from '../../Constants/contact'

function FloatingWhatsApp() {
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('site-footer')

    if (!footer || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed right-4 z-50 transition-[bottom] duration-300 sm:right-5 lg:right-6 ${
        isFooterVisible
          ? 'bottom-24 md:bottom-28'
          : 'bottom-4 sm:bottom-5 lg:bottom-6'
      } print:hidden`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#20BA5A] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden rounded-full bg-[var(--color-heading)] px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 lg:block">
          Chat on WhatsApp
        </span>

        <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  )
}

export default FloatingWhatsApp
