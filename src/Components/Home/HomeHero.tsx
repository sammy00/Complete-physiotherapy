import { CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Container from '../Ui/Container'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../../Constants/contact'

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Dr.+Vanita's+Complete+Physiotherapy+Vadodara"

function HomeHero() {
  return (
    <section className="bg-[var(--color-background-light-blue)]">
      <Container>
        <div className="grid min-h-125 items-center gap-10 py-12 lg:min-h-130 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-0">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-[var(--color-emerald)]">
              MOVE BETTER. LIVE BETTER.
            </p>

            <h1 className="font-heading text-4xl leading-tight font-bold text-[var(--color-heading)] md:text-5xl lg:text-6xl">
              Advanced Care.
              <span className="mt-1 block text-[var(--color-emerald)]">
                Stronger You.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-body)] md:text-lg">
              <span className="block">
                Personalized physiotherapy treatment to relieve pain,
              </span>
              <span className="block">
                restore movement and help you live life to the fullest.
              </span>
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/contact#appointment"
                className="group/book-appointment inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-small)] bg-[var(--color-primary-blue)] px-5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[var(--color-heading)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <CalendarCheck
                  size={17}
                  strokeWidth={2}
                  className="text-white"
                  aria-hidden="true"
                />
                <span className="text-white">Book Appointment</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/whatsapp inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[#25D366] bg-white px-5 text-sm font-semibold text-[#128C3A] transition-colors duration-200 hover:bg-[#25D366] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <FaWhatsapp
                  size={18}
                  className="text-[#128C3A] transition-colors duration-200 group-hover/whatsapp:text-white"
                  aria-hidden="true"
                />
                <span className="text-[#128C3A] transition-colors duration-200 group-hover/whatsapp:text-white">
                  WhatsApp Us
                </span>
              </a>
            </div>

            {/* Google Rating */}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Dr. Vanita's Complete Physiotherapy patient reviews"
              className="mt-7 flex w-fit flex-wrap items-center gap-3 rounded-[var(--radius-small)] transition-colors duration-200 hover:text-[var(--color-primary-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <span className="text-xl" aria-hidden="true">
                <FcGoogle />
              </span>

              <span className="text-lg font-semibold text-[var(--color-heading)]">
                4.9
              </span>

              <span
                className="text-lg tracking-[0.08em] text-amber-500"
                aria-label="5 star rating"
              >
                ★★★★★
              </span>

              <span className="text-sm font-medium text-[var(--color-body)]">
                (200+ Patient Reviews)
              </span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] md:min-h-90 lg:min-h-120">
            <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[var(--color-border)] bg-white/40">
              <p className="text-sm text-[var(--color-muted)]">
                Client physiotherapy image
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHero
