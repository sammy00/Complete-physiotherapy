import { CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { whatsappUrl } from '../../Constants/contact'
import Container from '../Ui/Container'

function AboutCTA() {
  return (
    <section className="bg-white pb-3 md:pb-4">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-footer-navy)] px-5 py-6 text-white shadow-[0_14px_34px_rgba(12,49,96,0.16)] md:px-7 lg:px-10 lg:py-7">
          {/* Decorative image */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[250px] overflow-hidden xl:block"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,92,184,0.45)] to-transparent" />

            <div className="absolute bottom-[-6px] left-7 h-[calc(100%_+_4px)] aspect-square opacity-28 invert">
              <img
                src="/icons/services/spinal-cord.svg"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* CTA content */}
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1fr_auto] xl:items-center xl:pl-[190px]">
            <div className="min-w-0">
              <h2 className="[font-family:var(--font-heading)] text-[26px] leading-8 font-bold !text-white md:text-[28px] md:leading-9">
                Ready to Start Your Recovery?
              </h2>

              <p className="mt-2 max-w-[520px] text-[15px] leading-6 font-medium text-white/90">
                Book your appointment today and take the first step towards a
                pain-free and active life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact#appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-small)] bg-[var(--color-emerald)] px-6 text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-[#3d973f] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-footer-navy)] focus-visible:outline-none"
              >
                <CalendarCheck size={18} strokeWidth={2} aria-hidden="true" />
                <span>Book Appointment</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[var(--color-emerald)]/25 bg-white px-6 text-sm font-bold text-[var(--color-emerald)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-emerald-light)] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-footer-navy)] focus-visible:outline-none"
              >
                <FaWhatsapp
                  className="h-[18px] w-[18px] text-[var(--color-emerald)]"
                  aria-hidden="true"
                />
                <span className="text-[var(--color-emerald)]">
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutCTA
