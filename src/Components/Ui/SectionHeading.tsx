import type { HTMLAttributes, ReactNode } from 'react'

interface SectionHeadingProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'title'
> {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  ...props
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: 'text-left',
    center: 'mx-auto text-center',
  }

  return (
    <div
      className={`max-w-3xl ${alignmentStyles[align]} ${className}`}
      {...props}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-[var(--color-emerald)] uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-wrap wrap-break-word text-[var(--color-heading)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-wrap wrap-break-word text-[var(--color-body)]">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
