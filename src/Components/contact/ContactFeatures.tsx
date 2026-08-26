import { Heart, ShieldCheck, User, Users } from 'lucide-react'
import ContactFeatureCard from './ContactFeatureCard'

const features = [
  {
    icon: ShieldCheck,
    title: 'Expert Care',
    description: 'Experienced physiotherapists committed to your recovery.',
    iconClassName:
      'bg-(--color-background-light-blue) text-(--color-primary-blue)',
  },
  {
    icon: User,
    title: 'Personalized Treatment',
    description: 'Tailored treatment plans for faster results.',
    iconClassName: 'bg-(--color-emerald-light) text-(--color-emerald)',
  },
  {
    icon: Heart,
    title: 'Advanced Techniques',
    description: 'Modern equipment and scientific methods.',
    iconClassName:
      'bg-(--color-background-light-blue) text-(--color-primary-blue)',
  },
  {
    icon: Users,
    title: 'Patient First Approach',
    description: 'Your comfort and well-being are our top priority.',
    iconClassName: 'bg-(--color-emerald-light) text-(--color-emerald)',
  },
]

function ContactFeatures() {
  return (
    <section
      className="bg-(--color-background-soft) pb-7 md:pb-8 lg:pb-10"
      aria-label="Why choose Complete Physiotherapy"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-(--radius-card) border border-(--color-border) bg-white px-5 py-3 shadow-(--shadow-card) md:px-6 md:py-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.08fr_1.12fr_1fr_1.1fr] lg:gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`min-w-0 lg:px-4 ${
                  index > 0 ? 'lg:border-l lg:border-(--color-divider)' : ''
                }`}
              >
                <ContactFeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconClassName={feature.iconClassName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFeatures
