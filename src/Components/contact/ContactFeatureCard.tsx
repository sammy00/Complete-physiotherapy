import type { LucideIcon } from 'lucide-react'

interface ContactFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconClassName: string
}

function ContactFeatureCard({
  icon: Icon,
  title,
  description,
  iconClassName,
}: ContactFeatureCardProps) {
  return (
    <article className="group flex min-w-0 items-center gap-4 py-2 transition-transform duration-200 hover:-translate-y-0.5">
      <div
        className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 ${iconClassName}`}
      >
        <Icon size={23} strokeWidth={2.2} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[15px] leading-5 font-bold text-[var(--color-heading)]">
          {title}
        </p>

        <p className="mt-1 text-[13px] leading-[1.45] text-[var(--color-body)]">
          {description}
        </p>
      </div>
    </article>
  )
}

export default ContactFeatureCard
