import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-(--container-max-width) px-(--container-padding-mobile) md:px-(--container-padding-tablet) lg:px-(--container-padding-desktop) ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
