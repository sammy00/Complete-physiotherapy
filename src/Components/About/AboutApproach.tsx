import type { CSSProperties } from 'react'

import { ClipboardList, HeartPulse, Search } from 'lucide-react'

import Container from '../Ui/Container'

type ApproachTone = 'blue' | 'green'

type ApproachStep = {
  number: string
  title: string
  description: string
  icon?: typeof ClipboardList
  iconSrc?: string
  tone: ApproachTone
}

const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We listen to your concerns and understand your goals.',
    icon: ClipboardList,
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Assess',
    description:
      'Detailed evaluation to identify the root cause of the problem.',
    icon: Search,
    tone: 'green',
  },
  {
    number: '03',
    title: 'Treat',
    description: 'Personalized treatment using advanced techniques.',
    iconSrc: '/icons/services/Treatment.svg',
    tone: 'blue',
  },
  {
    number: '04',
    title: 'Recover',
    description:
      'Guided recovery for long-term wellness, strength and confidence.',
    icon: HeartPulse,
    tone: 'green',
  },
] satisfies ApproachStep[]

const approachToneStyles = {
  blue: {
    icon: 'text-[var(--color-primary-blue)]',
    iconBorder: 'border-[rgba(15,92,184,0.16)]',
  },
  green: {
    icon: 'text-[var(--color-emerald)]',
    iconBorder: 'border-[rgba(47,154,38,0.18)]',
  },
} as const

const maskIconStyle = (src: string): CSSProperties => ({
  WebkitMask: `url("${src}") center / contain no-repeat`,
  mask: `url("${src}") center / contain no-repeat`,
})

function AboutApproach() {
  return (
    <section
      className="bg-[var(--color-background-soft)] py-8 md:py-10 lg:py-12"
      aria-labelledby="about-approach-heading"
    >
      <Container>
        <p
          id="about-approach-heading"
          className="text-center [font-family:var(--font-heading)] text-[13px] leading-5 [font-weight:var(--font-weight-bold)] tracking-[0.18em] [color:var(--color-emerald)] uppercase"
        >
          Our Approach
        </p>

        <div className="relative mt-7">
          {/* Desktop connector */}
          <div
            className="pointer-events-none absolute top-[34px] right-[10%] left-[10%] hidden border-t border-dashed border-[var(--color-secondary-blue)]/35 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {approachSteps.map((step) => {
              const Icon = step.icon
              const toneStyles = approachToneStyles[step.tone]

              return (
                <article
                  key={step.number}
                  className="relative flex min-w-0 flex-col items-center text-center"
                >
                  {/* Number + icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span
                      className="mr-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-[var(--color-emerald)] px-1.5 [font-family:var(--font-heading)] text-[11px] font-bold text-white shadow-sm ring-4 ring-[var(--color-background-soft)]"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border bg-white shadow-[0_8px_24px_rgba(20,60,120,0.07)] ${toneStyles.icon} ${toneStyles.iconBorder}`}
                    >
                      {Icon ? (
                        <Icon size={34} strokeWidth={1.8} aria-hidden="true" />
                      ) : (
                        <span
                          className="h-8 w-8 bg-current"
                          style={maskIconStyle(step.iconSrc ?? '')}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="mt-2 min-w-0">
                    <h3 className="!text-[20px] !leading-7 font-bold text-[var(--color-heading)] lg:!text-[22px]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-1.5 max-w-[220px] text-[13px] leading-5 text-[var(--color-body)]">
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutApproach
