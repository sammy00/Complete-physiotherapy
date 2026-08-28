import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-max-width)] px-[var(--container-padding-mobile)] md:px-[var(--container-padding-tablet)] lg:px-[var(--container-padding-desktop)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
