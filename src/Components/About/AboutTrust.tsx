import { Check } from 'lucide-react'

import Container from '../Ui/Container'
import ImagePlaceholder from '../Ui/ImagePlaceholder'

const trustPoints = [
  'Highly experienced and qualified physiotherapist',
  'Personalized treatment plans for every patient',
  'Advanced equipment and modern techniques',
  'Friendly, supportive and safe environment',
  'Focused on long-term recovery and wellness',
]

function AboutTrust() {
  return (
    <section className="bg-white pt-5 md:pt-6 lg:pt-7">
      <Container>
        <div className="border-b border-[var(--color-divider)] pb-5 md:pb-6 lg:pb-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,760px)] lg:items-center lg:gap-12">
            <div className="min-w-0">
              <p className="[font-family:var(--font-heading)] [font-size:var(--font-size-overline)] [line-height:var(--line-height-overline)] [font-weight:var(--font-weight-bold)] tracking-[0.12em] [color:var(--color-emerald)] uppercase">
                Why Patients Trust Us
              </p>

              <div className="mt-6 grid gap-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[var(--color-emerald)]">
                      <Check
                        size={10}
                        strokeWidth={3}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </span>

                    <p className="text-[14px] leading-6 font-medium text-[var(--color-heading)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ImagePlaceholder
              label="Clinic interior image"
              description="Client-provided clinic image will be added here."
              className="min-h-[240px] bg-[var(--color-background-soft)] md:min-h-[280px] lg:min-h-[260px]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutTrust
