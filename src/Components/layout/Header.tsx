import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../Ui/Button'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [activeLink, setActiveLink] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigationClick = (label: string) => {
    setActiveLink(label)
    setIsMenuOpen(false)
  }

  const handleAppointmentClick = () => {
    const appointmentSection = document.getElementById('appointment')

    if (!appointmentSection) {
      window.location.href = '/contact#appointment'
      return
    }

    setIsMenuOpen(false)
    window.history.pushState(null, '', '#appointment')
    appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="relative z-(--z-header) border-b border-(--color-divider) bg-white">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:grid lg:min-h-22 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigationClick('Home')}
          className="flex min-w-0 shrink items-center lg:shrink-0"
          aria-label="Complete Physiotherapy - Home"
        >
          <img
            src="/images/brand/Complete Logo.png"
            alt="Complete Physiotherapy"
            className="h-auto w-[clamp(10rem,54vw,14rem)] object-contain lg:w-64"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center justify-center gap-16 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive = activeLink === item.label

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
                style={{
                  color: isActive
                    ? 'var(--color-emerald)'
                    : 'var(--color-heading)',
                }}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  !isActive ? 'hover:text-(--color-emerald)' : ''
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-(--color-emerald) after:transition-all after:duration-200 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden translate-x-2 items-center justify-self-end sm:flex">
          <Button
            variant="primary"
            className="px-5 py-2.5 whitespace-nowrap"
            onClick={handleAppointmentClick}
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center justify-self-end rounded-lg text-(--color-primary-blue) transition-colors hover:bg-(--color-background-light-blue) lg:hidden"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={24} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-t border-(--color-divider) bg-white px-4 py-4 shadow-(--shadow-card) lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive = activeLink === item.label

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavigationClick(item.label)}
                  className={`rounded-(--radius-small) px-4 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-(--color-emerald-light) text-(--color-emerald)'
                      : 'text-(--color-heading) hover:bg-(--color-background-light-blue) hover:text-(--color-primary-blue)'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
