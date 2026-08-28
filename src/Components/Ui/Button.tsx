import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-primary-blue)]
    text-white
    hover:bg-[var(--color-dark-navy)]
  `,

  secondary: `
    border-2
    border-solid
    border-[var(--color-primary-blue)]
    bg-white
    text-[var(--color-primary-blue)]
    hover:bg-[var(--color-primary-blue)]
    hover:text-white
  `,

  whatsapp: `
    bg-[#25D366]
    text-white
    hover:bg-[var(--color-emerald)]
  `,
}

function Button({
  variant = 'primary',
  children,
  leftIcon,
  rightIcon,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] px-6 py-3 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary-blue)] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {leftIcon && (
        <span className="shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  )
}

export default Button
