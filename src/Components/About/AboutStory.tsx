import { Eye, Goal } from 'lucide-react'

import Container from '../Ui/Container'

const storyCards = [
  {
    icon: Goal,
    title: 'Our Mission',
    description:
      'To provide exceptional physiotherapy care that relieves pain, restores function and enhances quality of life.',
    className: 'bg-[linear-gradient(135deg,#ffffff_0%,#f1faf3_100%)]',
    iconClassName: 'text-[var(--color-emerald)]',
    iconBorderClassName: 'border-[rgba(47,154,38,0.18)]',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be a trusted name in physiotherapy, known for excellence, compassion and life-changing results.',
    className: 'bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_100%)]',
    iconClassName: 'text-[var(--color-primary-blue)]',
    iconBorderClassName: 'border-[rgba(15,92,184,0.16)]',
  },
]

function AboutStory() {
  return (
    <section className="bg-white pt-3 md:pt-4">
      <Container>
        <div className="border-b border-[var(--color-divider)] pb-6 md:pb-7">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,500px)_minmax(0,610px)] lg:items-start lg:gap-10 xl:gap-20">
            <div className="min-w-0 lg:pt-5">
              <p className="[font-family:var(--font-heading)] [font-size:var(--font-size-overline)] [line-height:var(--line-height-overline)] [font-weight:var(--font-weight-bold)] tracking-[0.12em] [color:var(--color-emerald)] uppercase">
                Our Story
              </p>

              <h2 className="mt-3 [font-family:var(--font-heading)] !text-[34px] !leading-[42px] [font-weight:var(--font-weight-bold)] [color:var(--color-heading)]">
                A Journey of Healing
              </h2>

              <p className="mt-5 max-w-[500px] text-[13px] leading-[22px] font-medium [color:var(--color-body)]">
                Dr. Vanita&apos;s Complete Physiotherapy was founded with a
                simple belief that every individual deserves personalized care
                and attention.
              </p>
              <br />

              <p className="mt-5 max-w-[500px] text-[13px] leading-[22px] font-medium [color:var(--color-body)]">
                Over the years, we have helped thousands of patients recover
                from pain, regain mobility and improve their quality of life
                through evidence-based treatment and compassionate support.
              </p>
            </div>

            <div className="grid w-full max-w-[610px] gap-5 sm:grid-cols-2 lg:-translate-y-3">
              {storyCards.map((card) => {
                const Icon = card.icon

                return (
                  <article
                    key={card.title}
                    className={`min-h-[280px] rounded-[var(--radius-card)] border border-[var(--color-divider)] p-7 shadow-[0_8px_24px_rgba(20,60,120,0.05)] ${card.className}`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border bg-white shadow-[0_8px_24px_rgba(20,60,120,0.07)] ${card.iconClassName} ${card.iconBorderClassName}`}
                    >
                      <Icon size={34} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <h3 className="!mt-9 !text-[15px] !leading-5 font-bold tracking-[0.08em] !text-[var(--color-emerald)] uppercase">
                      {card.title}
                    </h3>

                    <p className="!mt-6 max-w-[190px] text-[13px] leading-[24px] font-medium text-[var(--color-heading)]">
                      {card.description}
                    </p>
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

export default AboutStory
