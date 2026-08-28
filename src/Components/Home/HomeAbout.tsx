import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '../Ui/Container'

const treatmentAreas = [
  'Orthopedic Rehabilitation',
  'Neurological Rehabilitation',
  'Sports Injury Recovery',
  'Geriatric Care',
  "Women's Health Physiotherapy",
  'Post-Surgical Rehabilitation',
]

const reasons = [
  'Experienced Physiotherapy Care',
  'Personalized Treatment Plans',
  'Evidence-Guided Care Approach',
  'Friendly & Supportive Environment',
  'Patient-Focused Care',
]

function HomeAbout() {
  return (
    <section id="about" className="bg-white py-8 md:py-10 lg:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch xl:grid-cols-[0.95fr_1.15fr_1fr] xl:gap-10">
          <div className="relative min-h-72 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] shadow-sm md:min-h-80 lg:min-h-88 xl:min-h-125">
            <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[var(--color-border)] bg-[var(--color-background-light-blue)]">
              <p className="text-sm font-medium text-[var(--color-muted)]">
                Dr. Vanita clinic image
              </p>
            </div>

            <div className="absolute bottom-5 left-5 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white px-4 py-3 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-emerald-light)] text-[var(--color-emerald)]">
                  <ShieldCheck size={25} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div>
                  <p className="font-heading text-xl leading-none font-bold text-[var(--color-heading)]">
                    15+
                  </p>
                  <p className="mt-1 text-xs leading-4 font-semibold text-[var(--color-heading)]">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-1 md:p-2 lg:flex lg:flex-col lg:justify-center xl:p-0">
            <p className="text-xs font-bold tracking-[0.16em] text-[var(--color-emerald)] uppercase">
              About Dr. Vanita
            </p>

            <h2 className="mt-3 text-[28px] leading-[34px] font-bold text-[var(--color-heading)] md:text-[30px] md:leading-[38px]">
              Dedicated to Your Recovery and Well-being
            </h2>

            <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
              Dr. Vanita is a dedicated physiotherapist with over 15 years of
              experience supporting recovery from musculoskeletal, neurological
              and post-surgical conditions. Her patient-centered approach helps
              each treatment plan stay focused on comfort, movement and lasting
              progress.
            </p>

            <div className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {treatmentAreas.map((area) => (
                <div key={area} className="flex min-w-0 items-center gap-2">
                  <CheckCircle2
                    size={17}
                    strokeWidth={2.2}
                    className="shrink-0 text-[var(--color-emerald)]"
                    aria-hidden="true"
                  />

                  <span className="text-xs leading-4 font-semibold text-[var(--color-heading)]">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/home#about"
              className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-small)] bg-[var(--color-primary-blue)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-dark-navy)]"
            >
              <span className="text-white">Learn More About Dr. Vanita</span>
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="text-white"
                aria-hidden="true"
              />
            </Link>
          </div>

          <aside className="rounded-[var(--radius-card)] bg-[var(--color-footer-navy)] p-6 text-white shadow-[var(--shadow-card)] md:p-7 lg:col-span-2 lg:p-8 xl:col-span-1">
            <h2 className="font-heading text-[26px] leading-8 font-bold text-white">
              <span className="block text-white">Why Choose</span>
              <span className="block text-white">Us?</span>
            </h2>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-[var(--color-emerald)]" />

            <div className="mt-6 space-y-4 xl:space-y-5">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-emerald)]">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm leading-5 font-semibold text-white">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default HomeAbout
