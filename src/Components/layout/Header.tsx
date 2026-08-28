import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../Ui/Button'
import Container from '../Ui/Container'

const navigation = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/home#about' },
  { label: 'Services', href: '/home#services' },
  { label: 'Reviews', href: '/home#reviews' },
  { label: 'Contact', href: '/contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigationClick = () => {
    setIsMenuOpen(false)
  }

  const handleAppointmentClick = () => {
    setIsMenuOpen(false)
    navigate('/contact#appointment')
  }

  return (
    <header className="relative z-[var(--z-header)] border-b border-[var(--color-divider)] bg-white shadow-[0_2px_10px_rgba(15,47,99,0.05)]">
      <Container className="flex min-h-18 items-center justify-between gap-4 lg:grid lg:min-h-19 lg:grid-cols-[auto_1fr_auto]">
        {/* Logo */}
        <Link
          to="/home"
          onClick={handleNavigationClick}
          className="flex min-w-0 shrink items-center lg:shrink-0"
          aria-label="Complete Physiotherapy - Home"
        >
          <img
            src="/images/brand/Complete Logo.png"
            alt="Complete Physiotherapy"
            className="h-auto w-[clamp(10rem,54vw,14rem)] object-contain lg:w-60"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center justify-center gap-12 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive =
              item.href.includes('#') && location.hash
                ? `${location.pathname}${location.hash}` === item.href
                : location.pathname === item.href

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavigationClick}
                style={{
                  color: isActive
                    ? 'var(--color-emerald)'
                    : 'var(--color-heading)',
                }}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  !isActive ? 'hover:text-[var(--color-emerald)]' : ''
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[var(--color-emerald)] after:transition-all after:duration-200 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden items-center justify-self-end sm:flex">
          <Button
            variant="primary"
            className="min-h-11 px-6 py-2 whitespace-nowrap"
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
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center justify-self-end rounded-lg text-[var(--color-primary-blue)] transition-colors hover:bg-[var(--color-background-light-blue)] lg:hidden"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu size={24} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-t border-[var(--color-divider)] bg-white px-4 py-4 shadow-[var(--shadow-card)] lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href.includes('#') && location.hash
                  ? `${location.pathname}${location.hash}` === item.href
                  : location.pathname === item.href

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleNavigationClick}
                  className={`rounded-[var(--radius-small)] px-4 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[var(--color-emerald-light)] text-[var(--color-emerald)]'
                      : 'text-[var(--color-heading)] hover:bg-[var(--color-background-light-blue)] hover:text-[var(--color-primary-blue)]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
