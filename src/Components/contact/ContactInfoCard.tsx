import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ContactInfoCardProps {
  icon: ReactNode
  title: string
  children: ReactNode
  actionLabel?: string
  actionHref?: string
  iconClassName?: string
}

function ContactInfoCard({
  icon,
  title,
  children,
  actionLabel,
  actionHref,
  iconClassName = 'bg-(--color-primary-blue)',
}: ContactInfoCardProps) {
  return (
    <div className="flex min-w-0 items-start gap-4">
      {/* Icon */}
      <div
        className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${iconClassName}`}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-[22px] leading-6 font-bold text-(--color-heading)">
          {title}
        </p>

        <div className="mt-1.5 text-sm leading-6 text-(--color-body)">
          {children}
        </div>

        {actionLabel && actionHref && (
          <a
            href={actionHref}
            className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-(--color-heading) transition-colors duration-200 hover:text-(--color-primary-blue)"
          >
            <span>{actionLabel}</span>

            <ArrowRight
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default ContactInfoCard
