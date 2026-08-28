import Container from '../Ui/Container'

type IconTone = 'blue' | 'green'

const stats: Array<{
  iconSrc: string
  tone: IconTone
  value: string
  label: string
}> = [
  {
    iconSrc: '/icons/services/experience.svg',
    tone: 'blue',
    value: '15+',
    label: 'Years of Experience',
  },
  {
    iconSrc: '/icons/services/happy-patients.svg',
    tone: 'green',
    value: '5000+',
    label: 'Happy Patients',
  },
  {
    iconSrc: '/icons/services/treatment-solutions.svg',
    tone: 'blue',
    value: '20+',
    label: 'Treatment Solutions',
  },
  {
    iconSrc: '/icons/services/google-rating.svg',
    tone: 'green',
    value: '4.9',
    label: 'Google Rating',
  },
]

const iconToneStyles = {
  blue: {
    circle: 'bg-[#edf6ff]',
    icon: 'bg-[#0b58c4]',
  },
  green: {
    circle: 'bg-[#eef8ef]',
    icon: 'bg-[#2f9d3a]',
  },
} as const

function HomeStats() {
  return (
    <section
      className="bg-[var(--color-background-soft)] pb-10"
      aria-label="Clinic highlights"
    >
      <Container>
        <div className="relative z-20 -mt-16 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const toneStyles = iconToneStyles[stat.tone]

              return (
                <article
                  key={stat.label}
                  className={`flex min-w-0 items-center justify-center gap-5 px-6 py-5 md:py-6 ${
                    index > 0
                      ? 'lg:border-l lg:border-[var(--color-divider)]'
                      : ''
                  } ${
                    index % 2 === 1
                      ? 'sm:border-l sm:border-[var(--color-divider)]'
                      : ''
                  } ${
                    index > 1
                      ? 'border-t border-[var(--color-divider)] lg:border-t-0'
                      : ''
                  }`}
                >
                  <div
                    className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-full ${toneStyles.circle}`}
                  >
                    <span
                      className={`h-8 w-8 ${toneStyles.icon}`}
                      style={{
                        maskImage: `url(${stat.iconSrc})`,
                        WebkitMaskImage: `url(${stat.iconSrc})`,
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

                  <div className="min-w-0">
                    <p className="text-[32px] leading-none font-bold text-[#061c67]">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm leading-5 font-semibold text-[#071a63]">
                      {stat.label}
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

export default HomeStats
