import { FcGoogle } from 'react-icons/fc'

import Container from '../Ui/Container'

const treatmentImageSrc = ''

function ReviewsHero() {
  return (
    <section
      className="overflow-hidden bg-[var(--color-background-light-blue)]"
      aria-labelledby="reviews-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-8 pt-10 pb-9 md:pt-12 md:pb-10 lg:min-h-[356px] lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-8 lg:pt-0 lg:pb-4">
          <div className="relative z-10 max-w-[520px] lg:translate-y-2 lg:py-10">
            <p className="mb-3 [font-family:var(--font-heading)] [font-size:var(--font-size-overline)] [line-height:var(--line-height-overline)] [font-weight:var(--font-weight-semibold)] tracking-[0.12em] [color:var(--color-emerald)] uppercase">
              Patient Reviews
            </p>

            <h1
              id="reviews-hero-heading"
              className="!text-[34px] !leading-[42px] [font-family:var(--font-heading)] [font-weight:var(--font-weight-semibold)] [color:var(--color-heading)] md:!text-[38px] md:!leading-[46px] lg:!text-[38px] lg:!leading-[46px] xl:!text-[42px] xl:!leading-[50px]"
            >
              <span className="block md:whitespace-nowrap">
                Real Stories.
              </span>
              <span className="block [color:var(--color-emerald)]">
                Real Results.
              </span>
            </h1>

            <div className="mt-2 mb-4 h-[3px] w-10 rounded-full bg-[var(--color-emerald)]" />

            <p className="max-w-[440px] [font-family:var(--font-body)] [font-size:var(--font-size-body)] !leading-[27px] [color:var(--color-body)] md:!leading-[28px]">
              Discover how our personalized physiotherapy care has helped
              patients move better, feel stronger and live pain-free lives.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--color-heading)]">
              <FcGoogle className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span className="text-base font-bold">4.9</span>
              <span
                className="tracking-[0.08em] text-amber-500"
                aria-label="5 out of 5 stars"
              >
                <span aria-hidden="true">★★★★★</span>
              </span>
              <span className="text-[var(--color-body)]">
                (217 Google Reviews)
              </span>
            </div>
          </div>

          <div
            role="img"
            aria-label="Reviews hero physiotherapy treatment image"
            className="relative flex h-[300px] w-full items-center justify-center justify-self-stretch overflow-hidden rounded-[var(--radius-large)] bg-white/55 text-center md:h-[350px] lg:ml-0 lg:h-[356px] lg:w-[calc(100%-2rem)] lg:justify-self-end"
          >
            {treatmentImageSrc && (
              <img
                src={treatmentImageSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[var(--color-background-light-blue)] to-transparent lg:block"
            />

            <div
              className={`relative z-10 px-6 ${treatmentImageSrc ? 'sr-only' : ''}`}
            >
              <p className="text-base font-semibold text-[var(--color-heading)]">
                Physiotherapy treatment image
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Personalized physiotherapy treatment
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ReviewsHero
