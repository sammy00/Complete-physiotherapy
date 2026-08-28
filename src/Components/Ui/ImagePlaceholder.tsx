import type { HTMLAttributes } from 'react'
import { Image } from 'lucide-react'

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
}

function ImagePlaceholder({
  label = 'Image Placeholder',
  description = 'Client-provided image will be added here.',
  className = '',
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex min-h-80 items-center justify-center rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-background-light-blue)] p-8 text-center ${className}`}
      {...props}
    >
      <div className="flex max-w-sm flex-col items-center">
        <div
          aria-hidden="true"
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--color-primary-blue)] shadow-[var(--shadow-card)]"
        >
          <Image size={26} strokeWidth={1.5} />
        </div>

        <p className="text-base font-semibold text-[var(--color-heading)]">
          {label}
        </p>

        <p className="mt-1 text-sm text-[var(--color-muted)]">{description}</p>
      </div>
    </div>
  )
}

export default ImagePlaceholder
