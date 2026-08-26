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
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-(--color-emerald) uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-wrap break-words text-(--color-heading)">{title}</h2>

      {description && (
        <p className="mt-4 text-wrap break-words text-(--color-body)">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
