import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/contact' },
]

const services = [
  'Back & Neck Pain',
  'Sports Injury Rehabilitation',
  'Post-Surgery Rehabilitation',
  'Geriatric Care',
  'Weight Loss & Fitness',
  "Women's Health",
]

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919925418176',
    icon: FaWhatsapp,
    className: 'hover:border-[#25D366] hover:bg-[#25D366]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
    className: 'hover:border-[#E1306C] hover:bg-[#E1306C]',
  },
]

function Footer() {
  return (
    <footer className="bg-[#073365] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-9 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1.2fr] xl:gap-0">
          <div className="min-w-0 xl:border-r xl:border-white/10 xl:pr-12">
            <a
              href="/"
              aria-label="Complete Physiotherapy home"
              className="mb-3 block w-fit"
            >
              <img
                src="/images/brand/Footer Logo.png"
                alt="Dr. Vanita's Complete Physiotherapy"
                className="h-auto w-64 max-w-full"
              />
            </a>

            <p className="max-w-xs text-sm leading-6 text-white/75">
              Helping you move better, recover faster and live a pain-free life
              with expert physiotherapy care.
            </p>

            <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
              Follow & Connect
            </p>

            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 ${social.className}`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="min-w-0 xl:border-r xl:border-white/10 xl:px-12">
            <FooterHeading>Quick Links</FooterHeading>

            <nav aria-label="Footer navigation">
              <ul className="mt-5 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-sm text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-(--color-emerald)"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="min-w-0 xl:border-r xl:border-white/10 xl:px-12">
            <FooterHeading>Services</FooterHeading>

            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-(--color-emerald)"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 xl:pl-12">
            <FooterHeading>Contact Info</FooterHeading>

            <div className="mt-5 space-y-3.5">
              <FooterContactItem icon={<Phone size={14} strokeWidth={2} />}>
                <a
                  href="tel:+919925418176"
                  className="transition-colors hover:text-(--color-soft-emerald)"
                >
                  +91 99254 18176
                </a>
              </FooterContactItem>

              <FooterContactItem icon={<MapPin size={14} strokeWidth={2} />}>
                <address className="not-italic">
                  227,228 Rajpath Complex,
                  <br />
                  Nr Bright Day School,
                  <br />
                  Opp. Nayra Petrol Pump,
                  <br />
                  Vasna Bhayli Road,
                  <br />
                  Vadodara – 391410
                </address>
              </FooterContactItem>

              <FooterContactItem icon={<Mail size={14} strokeWidth={2} />}>
                <a
                  href="mailto:completephysio2018@gmail.com"
                  className="wrap-anywhere transition-colors hover:text-(--color-soft-emerald)"
                >
                  completephysio2018@gmail.com
                </a>
              </FooterContactItem>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#052b59]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-white/85">
            © {new Date().getFullYear()} Dr. Vanita&apos;s Complete
            Physiotherapy, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

interface FooterContactItemProps {
  icon: ReactNode
  children: ReactNode
}

function FooterContactItem({ icon, children }: FooterContactItemProps) {
  return (
    <div className="flex items-start gap-3 text-sm leading-5 text-white/75">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--color-emerald) text-white">
        {icon}
      </span>

      <div className="min-w-0">{children}</div>
    </div>
  )
}

interface FooterHeadingProps {
  children: string
}

function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <div>
      <h3 className="text-lg leading-6 font-semibold whitespace-nowrap text-white! xl:text-[22px]">
        {children}
      </h3>

      <div className="mt-3 h-0.5 w-10 rounded-full bg-(--color-emerald)" />
    </div>
  )
}

export default Footer
