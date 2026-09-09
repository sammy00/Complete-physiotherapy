import type { CSSProperties } from 'react'

import { ClipboardList, Dumbbell, ShieldCheck } from 'lucide-react'

import Container from '../Ui/Container'

type ProcessTone = 'blue' | 'green'

const steps: Array<{
  number: string
  title: string
  description: string
  icon?: typeof ClipboardList
  iconSrc?: string
  tone: ProcessTone
}> = [
  {
    number: '01',
    title: 'Assessment',
    description: 'We assess your condition to understand your needs.',
    icon: ClipboardList,
    tone: 'green',
  },
  {
    number: '02',
    title: 'Diagnosis',
    description: 'Assessment findings guide a focused treatment plan.',
    iconSrc: '/icons/Services/Diagnosis.svg',
    tone: 'blue',
  },
  {
    number: '03',
    title: 'Treatment',
    description: 'Personalized therapy supports movement and recovery.',
    icon: Dumbbell,
    tone: 'green',
  },
  {
    number: '04',
    title: 'Recovery',
    description: 'Guided rehabilitation helps restore strength and confidence.',
    iconSrc: '/icons/Services/Recovery.svg',
    tone: 'blue',
  },
  {
    number: '05',
    title: 'Prevention',
    description: 'Advice and exercises support long-term wellbeing.',
    icon: ShieldCheck,
    tone: 'green',
  },
]

const maskIconStyle = (src: string): CSSProperties => ({
  WebkitMask: `url("${src}") center / contain no-repeat`,
  mask: `url("${src}") center / contain no-repeat`,
})

function ServicesProcess() {
  return (
    <section className="services-process" aria-labelledby="services-process-heading">
      <Container>
        <div className="services-process__header">
          <p>Our Approach</p>
          <h2 id="services-process-heading">A Proven Path to Recovery</h2>
          <span aria-hidden="true" />
        </div>

        <div className="services-process__steps">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article key={step.number} className="services-process__step">
                <div className="services-process__marker">
                  <span
                    className={`services-process__number services-process__number--${step.tone}`}
                  >
                    {step.number}
                  </span>

                  <span
                    className={`services-process__icon services-process__icon--${step.tone}`}
                  >
                    {Icon ? (
                      <Icon size={30} strokeWidth={1.8} aria-hidden="true" />
                    ) : (
                      <span
                        className="services-process__mask-icon"
                        style={maskIconStyle(step.iconSrc ?? '')}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesProcess
