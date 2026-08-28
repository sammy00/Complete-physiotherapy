import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../Ui/Container'
import SectionHeading from '../Ui/SectionHeading'

type IconTone = 'blue' | 'green'

const services: Array<{
  title: string
  description: string
  iconSrc: string
  tone: IconTone
}> = [
  {
    title: 'Back & Neck Pain Treatment',
    description: 'Relief from pain and improved mobility.',
    iconSrc: '/icons/services/spine.svg',
    tone: 'blue',
  },
  {
    title: 'Sports Injury Rehabilitation',
    description: 'Recover stronger and return to activity safely.',
    iconSrc: '/icons/services/sports-injury.svg',
    tone: 'green',
  },
  {
    title: 'Post-Surgery Rehabilitation',
    description: 'Guided recovery to restore strength and function.',
    iconSrc: '/icons/services/post-surgery.svg',
    tone: 'blue',
  },
  {
    title: 'Geriatric Care',
    description: 'Specialized care for mobility and independence.',
    iconSrc: '/icons/services/geriatric-care.svg',
    tone: 'green',
  },
  {
    title: 'Weight Loss & Fitness',
    description: 'Personalized programs for fitness, mobility and movement.',
    iconSrc: '/icons/services/fitness.svg',
    tone: 'blue',
  },
  {
    title: "Women's Health Physiotherapy",
    description: "Personalized physiotherapy for women's health and wellbeing.",
    iconSrc: '/icons/services/womens-health.svg',
    tone: 'green',
  },
]

const iconToneStyles = {
  blue: {
    circle: 'bg-[var(--color-background-light-blue)]',
    icon: 'bg-[var(--color-primary-blue)]',
    border: 'hover:border-[var(--color-primary-blue)]',
    link: 'group-hover:text-[var(--color-primary-blue)]',
  },
  green: {
    circle: 'bg-[var(--color-emerald-light)]',
    icon: 'bg-[var(--color-emerald)]',
    border: 'hover:border-[var(--color-emerald)]',
    link: 'group-hover:text-[var(--color-emerald)]',
  },
} as const

function HomeServices() {
  return (
    <section
      id="services"
      className="bg-[var(--color-background-soft)] pt-4 pb-6 md:pt-5 md:pb-8 lg:pb-9"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Physiotherapy Solutions"
          align="center"
          className="mx-auto max-w-none [&>h2]:text-[28px] [&>h2]:leading-[34px] [&>h2]:font-bold [&>h2]:text-[var(--color-heading)] md:[&>h2]:text-[30px] md:[&>h2]:leading-[38px] [&>p:first-child]:mb-1.5 [&>p:first-child]:text-[13px] [&>p:first-child]:font-bold [&>p:first-child]:tracking-[0.18em] [&>p:first-child]:text-[var(--color-emerald)]"
        />

        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => {
            const toneStyles = iconToneStyles[service.tone]

            return (
              <article
                key={service.title}
                className={`group flex min-h-[210px] min-w-0 flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${toneStyles.border}`}
              >
                <div
                  className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${toneStyles.circle}`}
                >
                  <span
                    className={`h-7 w-7 transition-colors duration-300 ${toneStyles.icon}`}
                    style={{
                      maskImage: `url(${service.iconSrc})`,
                      WebkitMaskImage: `url(${service.iconSrc})`,
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                    }}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-3.5 flex min-h-11 items-center justify-center text-[15px] leading-tight font-bold text-[var(--color-heading)]">
                  {service.title}
                </p>

                <p className="mt-2.5 text-[13px] leading-5 text-[var(--color-body)]">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold"
                >
                  <span
                    className={`text-[var(--color-body)] transition-colors duration-200 ${toneStyles.link}`}
                  >
                    Learn More
                  </span>
                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    className={`text-[var(--color-body)] transition-all duration-200 group-hover:translate-x-1 ${toneStyles.link}`}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            )
          })}
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            to="/services"
            className="group/view-services inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[var(--color-primary-blue)] bg-white px-6 text-sm font-semibold transition-colors duration-200 hover:bg-[var(--color-primary-blue)]"
          >
            <span className="text-[var(--color-primary-blue)] transition-colors duration-200 group-hover/view-services:text-white">
              View All Services
            </span>
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="text-[var(--color-primary-blue)] transition-colors duration-200 group-hover/view-services:text-white"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default HomeServices
