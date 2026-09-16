import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { headerServices } from '../../Data/services'
import Button from '../Ui/Button'
import Container from '../Ui/Container'

const navigation = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigationClick = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
  }

  const handleAppointmentClick = () => {
    setIsMenuOpen(false)
    navigate('/contact#appointment')
  }

  useEffect(() => {
    if (!isMenuOpen && !isServicesOpen && !isMobileServicesOpen) {
      return
    }

    const closeMenusOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsServicesOpen(false)
        setIsMobileServicesOpen(false)
      }
    }

    document.addEventListener('keydown', closeMenusOnEscape)

    return () => {
      document.removeEventListener('keydown', closeMenusOnEscape)
    }
  }, [isMenuOpen, isMobileServicesOpen, isServicesOpen])

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

            if (item.label === 'Services') {
              return (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onFocus={() => setIsServicesOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setIsServicesOpen(false)
                    }
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Link
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

                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={isServicesOpen}
                      aria-controls="desktop-services-menu"
                      onClick={() => setIsServicesOpen((open) => !open)}
                      className="flex h-7 w-6 items-center justify-center rounded-full text-[var(--color-heading)] transition-colors hover:bg-[var(--color-background-light-blue)] hover:text-[var(--color-emerald)]"
                    >
                      <ChevronDown
                        size={15}
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    id="desktop-services-menu"
                    className={`absolute top-full left-1/2 w-[560px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                      isServicesOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="rounded-[var(--radius-card)] border border-[#e3edf8] bg-white p-3 shadow-[0_18px_45px_rgba(18,59,116,0.14)]">
                      <div className="grid grid-cols-2 gap-1">
                        {headerServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services#${service.id}`}
                            onClick={handleNavigationClick}
                            className="rounded-[var(--radius-small)] px-3 py-2.5 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:bg-[var(--color-background-light-blue)] hover:text-[var(--color-primary-blue)]"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      <Link
                        to="/services#all-services"
                        onClick={handleNavigationClick}
                        className="mt-2 flex items-center justify-between rounded-[var(--radius-small)] bg-[var(--color-emerald-light)] px-3 py-2.5 text-sm font-bold text-[var(--color-emerald)] transition-colors hover:bg-[#e3f5e5]"
                      >
                        View All Services
                        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }

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

              if (item.label === 'Services') {
                return (
                  <div key={item.label}>
                    <div
                      className={`flex items-center rounded-[var(--radius-small)] transition-colors ${
                        isActive
                          ? 'bg-[var(--color-emerald-light)] text-[var(--color-emerald)]'
                          : 'text-[var(--color-heading)] hover:bg-[var(--color-background-light-blue)] hover:text-[var(--color-primary-blue)]'
                      }`}
                    >
                      <Link
                        to={item.href}
                        onClick={handleNavigationClick}
                        className="min-w-0 flex-1 px-4 py-3 text-base font-semibold"
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        aria-label="Toggle services submenu"
                        aria-expanded={isMobileServicesOpen}
                        aria-controls="mobile-services-menu"
                        onClick={() =>
                          setIsMobileServicesOpen((open) => !open)
                        }
                        className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-small)]"
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={2}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {isMobileServicesOpen && (
                      <div
                        id="mobile-services-menu"
                        className="mt-1 grid gap-1 rounded-[var(--radius-small)] bg-[var(--color-background-soft)] p-2"
                      >
                        {headerServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services#${service.id}`}
                            onClick={handleNavigationClick}
                            className="rounded-[var(--radius-small)] px-4 py-2.5 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:bg-white hover:text-[var(--color-primary-blue)]"
                          >
                            {service.title}
                          </Link>
                        ))}

                        <Link
                          to="/services#all-services"
                          onClick={handleNavigationClick}
                          className="flex items-center justify-between rounded-[var(--radius-small)] px-4 py-2.5 text-sm font-bold text-[var(--color-emerald)] transition-colors hover:bg-white"
                        >
                          View All Services
                          <ArrowRight
                            size={15}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                )
              }

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
