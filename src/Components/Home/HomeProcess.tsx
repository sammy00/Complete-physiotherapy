import {
  Bed,
  ClipboardList,
  HeartPulse,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'

import Container from '../Ui/Container'
import SectionHeading from '../Ui/SectionHeading'

type StepTone = 'blue' | 'green'

const steps: Array<{
  number: string
  title: string
  description: string
  icon: typeof MessageSquareText
  tone: StepTone
}> = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We listen to your concerns and understand your health history.',
    icon: MessageSquareText,
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Assessment',
    description:
      'Detailed evaluation helps identify the cause of your problem.',
    icon: ClipboardList,
    tone: 'green',
  },
  {
    number: '03',
    title: 'Treatment',
    description:
      'A personalized treatment plan is created around your recovery needs.',
    icon: Bed,
    tone: 'blue',
  },
  {
    number: '04',
    title: 'Recovery',
    description:
      'Guided rehabilitation supports strength, movement and confidence.',
    icon: HeartPulse,
    tone: 'green',
  },
  {
    number: '05',
    title: 'Prevention',
    description:
      'Advice and exercises help reduce the chance of recurring problems.',
    icon: ShieldCheck,
    tone: 'blue',
  },
]

const stepToneStyles = {
  blue: {
    badge: 'bg-[var(--color-primary-blue)] text-white',
    circle:
      'border-[var(--color-background-light-blue)] bg-white text-[var(--color-primary-blue)]',
  },
  green: {
    badge: 'bg-[var(--color-emerald)] text-white',
    circle:
      'border-[var(--color-emerald-light)] bg-white text-[var(--color-emerald)]',
  },
} as const

function HomeProcess() {
  return (
    <section
      className="bg-[var(--color-background-soft)] py-10 md:py-12 lg:py-14"
      aria-labelledby="home-process-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="Your Recovery, Step by Step"
          align="center"
          className="mx-auto max-w-none [&>h2]:text-[28px] [&>h2]:leading-[34px] [&>h2]:font-bold [&>h2]:text-[var(--color-heading)] md:[&>h2]:text-[30px] md:[&>h2]:leading-[38px] [&>p:first-child]:mb-1.5 [&>p:first-child]:text-[13px] [&>p:first-child]:font-bold [&>p:first-child]:tracking-[0.18em] [&>p:first-child]:text-[var(--color-emerald)]"
          id="home-process-heading"
        />

        <div className="relative mx-auto mt-9 max-w-2xl lg:mt-11 lg:max-w-none">
          <div
            className="pointer-events-none absolute top-9 right-[11%] left-[11%] hidden border-t border-[var(--color-divider)] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-7 lg:grid-cols-5 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              const toneStyles = stepToneStyles[step.tone]

              return (
                <article
                  key={step.number}
                  className="relative grid min-w-0 grid-cols-[4rem_1fr] gap-4 text-left lg:flex lg:flex-col lg:items-center lg:text-center"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-8 shadow-sm ${toneStyles.circle}`}
                    >
                      <span
                        className={`font-heading absolute -top-3 left-1/2 flex h-6 min-w-6 -translate-x-1/2 items-center justify-center rounded-full px-1.5 text-[11px] font-bold shadow-sm ring-4 ring-[var(--color-background-soft)] ${toneStyles.badge}`}
                      >
                        {step.number}
                      </span>

                      <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="min-w-0 pt-2 lg:pt-0">
                    <h3 className="text-[14px] leading-5 font-bold text-[var(--color-heading)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-[13px] leading-5 text-[var(--color-body)] lg:max-w-44">
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

export default HomeProcess
