import { CheckCircle2, ShieldCheck, Star, UsersRound } from 'lucide-react'

import Container from '../Ui/Container'
import ImagePlaceholder from '../Ui/ImagePlaceholder'

const specialties = [
  'Orthopedic Rehabilitation',
  'Neurological Rehabilitation',
  'Sports Injury Recovery',
  'Geriatric Physiotherapy',
  "Women's Health Physiotherapy",
  'Post-Surgical Rehabilitation',
]

const trustCards = [
  {
    icon: UsersRound,
    title: '15+',
    description: 'Years of Experience',
  },
  {
    icon: UsersRound,
    title: 'Thousands',
    description: 'of Patients Treated',
  },
  {
    icon: Star,
    title: '4.9',
    description: 'Google Rating',
    rating: true,
  },
  {
    icon: ShieldCheck,
    title: 'Commitment',
    description: 'to Your Recovery',
  },
]

function AboutDoctor() {
  return (
    <section className="bg-white pt-5 pb-7 md:pt-6 md:pb-9 lg:pt-6 lg:pb-8">
      <Container>
        <div className="border-b border-[var(--color-divider)] pb-5 md:pb-6 lg:pb-5">
          <div className="grid gap-8 lg:grid-cols-[400px_minmax(0,520px)_285px] lg:items-start">
            <ImagePlaceholder
              label="Dr. Vanita photo"
              description="Client-provided doctor image will be added here."
              className="min-h-[380px] bg-[var(--color-background-soft)]"
            />

            <div className="min-w-0 lg:pt-3">
              <p className="[font-family:var(--font-heading)] text-sm leading-5 [font-weight:var(--font-weight-bold)] tracking-[0.12em] [color:var(--color-emerald)] uppercase">
                Meet Our Expert
              </p>

              <h2 className="mt-2 [font-family:var(--font-heading)] text-[30px] leading-[38px] [font-weight:var(--font-weight-bold)] whitespace-nowrap [color:var(--color-heading)]">
                Dr. Vanita Patel
              </h2>

              <p className="mt-1 [font-family:var(--font-heading)] text-[15px] leading-6 [font-weight:var(--font-weight-semibold)] whitespace-nowrap [color:var(--color-emerald)]">
                BPT, MIAP
                <span className="mx-2 [color:var(--color-heading)]">•</span>
                Senior Physiotherapist
              </p>

              <div className="mt-7 flex max-w-[520px] flex-col gap-5">
                <p className="text-[14px] leading-8 font-medium [color:var(--color-body)]">
                  Dr. Vanita Patel is a dedicated and highly qualified
                  physiotherapist with over 15 years of clinical experience in
                  treating a wide range of musculoskeletal, neurological and
                  post-surgical conditions.
                </p>

                <p className="text-[14px] leading-8 font-medium [color:var(--color-body)]">
                  Her patient-centered approach, combined with advanced
                  techniques and modern equipment, supports effective care and
                  long-last results.
                </p>
              </div>

              <div className="mt-4 grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                {specialties.map((specialty) => (
                  <div
                    key={specialty}
                    className="flex min-w-0 items-center gap-2"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2.4}
                      className="shrink-0 text-[var(--color-emerald)]"
                      aria-hidden="true"
                    />

                    <span className="text-[12px] leading-5 font-semibold whitespace-nowrap text-[var(--color-heading)]">
                      {specialty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 lg:pt-4">
              {trustCards.map((card) => {
                const Icon = card.icon

                return (
                  <article
                    key={card.description}
                    className="flex min-h-[84px] items-center gap-4 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white px-5 py-3.5 shadow-[0_6px_18px_rgba(20,60,120,0.05)]"
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.9}
                      className="shrink-0 text-[#0f5cb8]"
                      aria-hidden="true"
                    />

                    <div className="min-w-0">
                      <div className="flex flex-nowrap items-center gap-2">
                        <p className="text-[22px] leading-none font-bold text-[var(--color-heading)]">
                          {card.title}
                        </p>

                        {card.rating && (
                          <span
                            className="text-[15px] tracking-[0.08em] text-[#f6a800]"
                            aria-label="5 star rating"
                          >
                            ★★★★★
                          </span>
                        )}
                      </div>

                      <p className="mt-1.5 text-sm leading-5 font-medium text-[var(--color-heading)]">
                        {card.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutDoctor
