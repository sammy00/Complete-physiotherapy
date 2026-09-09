import { CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { whatsappUrl } from '../../Constants/contact'
import Container from '../Ui/Container'

function ServicesHero() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-[var(--color-background-light-blue)]"
      aria-labelledby="services-hero-heading"
    >
      <Container>
        <div className="grid min-h-[470px] items-stretch lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Left Content */}
          <div className="relative z-10 flex items-center py-12 pr-0 md:py-14 lg:py-16 lg:pr-10 xl:pr-14">
            <div className="max-w-[590px]">
              <p className="mb-3 [font-family:var(--font-heading)] [font-size:var(--font-size-overline)] [line-height:var(--line-height-overline)] [font-weight:var(--font-weight-semibold)] tracking-[0.12em] [color:var(--color-emerald)] uppercase">
                Our Services
              </p>

              <h1
                id="services-hero-heading"
                className="[font-family:var(--font-heading)] !text-[36px] !leading-[44px] [font-weight:var(--font-weight-semibold)] [color:var(--color-heading)] md:!text-[42px] md:!leading-[50px] xl:!text-[46px] xl:!leading-[56px]"
              >
                <span className="block">Comprehensive Physiotherapy</span>

                <span className="block [color:var(--color-emerald)]">
                  Solutions for Every Need
                </span>
              </h1>

              <span
                aria-hidden="true"
                className="my-5 block h-[3px] w-12 rounded-full bg-[var(--color-emerald)]"
              />

              <p className="max-w-[480px] [font-family:var(--font-body)] !text-[15px] !leading-[27px] [color:var(--color-body)] md:!text-[16px] md:!leading-[28px]">
                We provide advanced, personalized and evidence-based
                physiotherapy treatments to help you recover, restore function
                and live a pain-free, active life.
              </p>

              <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
                <Link
                  to="/contact#appointment"

                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-small)] bg-[var(--color-primary-blue)] px-6 text-sm font-semibold !text-white shadow-[0_10px_24px_rgba(15,92,184,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-dark-navy)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <CalendarCheck
                    size={18}
                    strokeWidth={2}
                    className="!text-white"
                    aria-hidden="true"
                  />

                  <span>Book Appointment</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[var(--color-emerald)] bg-white px-6 text-sm font-semibold text-[var(--color-emerald)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-emerald-light)] focus-visible:ring-2 focus-visible:ring-[var(--color-emerald)] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <FaWhatsapp
                    size={19}
                    className="!text-[var(--color-emerald)]"
                    aria-hidden="true"
                  />

                  <span className="text-[var(--color-emerald)]">
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[300px] overflow-hidden md:min-h-[360px] lg:min-h-[470px]">
            <div
              role="img"
              aria-label="Physiotherapy treatment"
              className="absolute inset-0 flex items-center justify-center bg-white/60 text-center"
            >
              <div className="relative z-10 px-6">
                <p className="text-base font-semibold text-[var(--color-heading)]">
                  Physiotherapy service image
                </p>

                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Client-provided treatment image will be added here.
                </p>
              </div>
            </div>

            {/* Soft blend into image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-24 bg-gradient-to-r from-[var(--color-background-light-blue)] via-[var(--color-background-light-blue)]/70 to-transparent lg:block"
            />

            {/* Decorative soft glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-[var(--color-secondary-blue)]/8 blur-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServicesHero
