import { HeartHandshake, Image, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'

import Container from '../Ui/Container'

type BenefitTone = 'blue' | 'green'

const benefits: Array<{
  title: string
  description: string
  icon: typeof UsersRound
  tone: BenefitTone
}> = [
  {
    title: 'Experienced Physiotherapy Care',
    description:
      'Focused care built around your recovery.',
    icon: UsersRound,
    tone: 'green',
  },
  {
    title: 'Personalized Treatment',
    description:
      'Plans tailored to your needs and goals.',
    icon: ShieldCheck,
    tone: 'blue',
  },
  {
    title: 'Evidence-Based Approach',
    description:
      'Structured care guided by assessment.',
    icon: Sparkles,
    tone: 'blue',
  },
  {
    title: 'Compassionate Care',
    description:
      'Respectful support at every step.',
    icon: HeartHandshake,
    tone: 'green',
  },
]

function ServicesWhyChooseUs() {
  return (
    <section className="services-why" aria-labelledby="services-why-heading">
      <Container>
        <div className="services-why__panel">
          <div className="services-why__media" role="img" aria-label="Clinic treatment room image">
            <div className="services-why__media-placeholder">
              <span className="services-why__media-icon" aria-hidden="true">
                <Image size={24} strokeWidth={1.7} />
              </span>
              <p>Clinic treatment room image</p>
              <span>Modern physiotherapy treatment space</span>
            </div>
          </div>

          <div className="services-why__content">
            <p className="services-why__eyebrow">Why Choose Us</p>
            <h2 id="services-why-heading" className="services-why__title">
              Your Health is Our Priority
            </h2>

            <div className="services-why__benefits">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <article
                    key={benefit.title}
                    className="services-why__benefit"
                  >
                    <span
                      className={`services-why__benefit-icon services-why__benefit-icon--${benefit.tone}`}
                    >
                      <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                    </span>

                    <span className="services-why__benefit-copy">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </span>
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

export default ServicesWhyChooseUs
