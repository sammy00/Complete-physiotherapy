import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../../Constants/contact'

const quickLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About Us', href: '/home#about' },
  { label: 'Services', href: '/home#services' },
  { label: 'Reviews', href: '/home#reviews' },
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
    href: whatsappUrl,
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

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=227+228+Rajpath+Complex+Nr+Bright+Day+School+Opp+Nayra+Petrol+Pump+Vasna+Bhayli+Road+Vadodara+391410'

function Footer() {
  return (
    <footer id="site-footer" className="bg-[#073365] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-9 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1.2fr] xl:gap-0">
          <div className="min-w-0 xl:border-r xl:border-white/10 xl:pr-12">
            <Link
              to="/home"
              aria-label="Complete Physiotherapy home"
              className="mb-3 block w-fit"
            >
              <img
                src="/images/brand/Footer Logo.png"
                alt="Dr. Vanita's Complete Physiotherapy"
                className="h-auto w-64 max-w-full"
              />
            </Link>

            <p className="max-w-xs text-sm leading-6 text-white/75">
              Helping you move better, recover faster and live a pain-free life
              with expert physiotherapy care.
            </p>

            <div className="mt-8 xl:mt-10">
              <p className="text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
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
          </div>

          <div className="min-w-0 xl:border-r xl:border-white/10 xl:px-12">
            <FooterHeading>Quick Links</FooterHeading>

            <nav aria-label="Footer navigation">
              <ul className="mt-5 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="inline-block text-sm text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-[var(--color-emerald)]"
                    >
                      {link.label}
                    </Link>
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
                  className="text-sm text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-[var(--color-emerald)]"
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
                  href="tel:+919913140892"
                  className="transition-colors hover:text-[var(--color-soft-emerald)]"
                >
                  +91 99131 40892
                </a>
              </FooterContactItem>

              <FooterContactItem icon={<MapPin size={14} strokeWidth={2} />}>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-colors hover:text-[var(--color-soft-emerald)]"
                >
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
                </a>
              </FooterContactItem>

              <FooterContactItem icon={<Mail size={14} strokeWidth={2} />}>
                <a
                  href="mailto:completephysio2018@gmail.com"
                  className="wrap-anywhere transition-colors hover:text-[var(--color-soft-emerald)]"
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
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-emerald)] text-white">
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
      <h3 className="text-lg leading-6 font-semibold whitespace-nowrap text-white xl:text-[22px]">
        {children}
      </h3>

      <div className="mt-3 h-0.5 w-10 rounded-full bg-[var(--color-emerald)]" />
    </div>
  )
}

export default Footer
