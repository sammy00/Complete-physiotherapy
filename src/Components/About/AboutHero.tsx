import Container from '../Ui/Container'

function AboutHero() {
  return (
    <section
      className="overflow-hidden bg-[var(--color-background-light-blue)]"
      aria-labelledby="about-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-8 py-10 md:py-12 lg:min-h-[350px] lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-8 lg:py-0">
          {/* Left Content */}
          <div className="relative z-10 max-w-[520px] lg:translate-y-2 lg:py-10">
            <p className="mb-3 [font-family:var(--font-heading)] [font-size:var(--font-size-overline)] [line-height:var(--line-height-overline)] [font-weight:var(--font-weight-semibold)] tracking-[0.12em] [color:var(--color-emerald)] uppercase">
              About Us
            </p>

            <h1
              id="about-hero-heading"
              className="!text-[34px] !leading-[42px] [font-family:var(--font-heading)] [font-weight:var(--font-weight-semibold)] [color:var(--color-heading)] md:!text-[38px] md:!leading-[46px] lg:!text-[38px] lg:!leading-[46px] xl:!text-[42px] xl:!leading-[50px]"
            >
              <span className="block md:whitespace-nowrap">
                Compassionate Care.
              </span>
              <span className="block [color:var(--color-emerald)]">
                Proven Results.
              </span>
            </h1>

            <div className="my-3 h-[3px] w-10 rounded-full bg-[var(--color-emerald)]" />

            <p className="max-w-[440px] [font-family:var(--font-body)] [font-size:var(--font-size-body)] [line-height:var(--line-height-body)] [color:var(--color-body)]">
              At Dr. Vanita&apos;s Complete Physiotherapy, we are committed to
              helping you move better, feel stronger, and live a pain-free life.
            </p>
          </div>

          {/* Right Image */}
          <div
            role="img"
            aria-label="About hero physiotherapy image"
            className="relative flex h-[280px] w-full items-center justify-center justify-self-stretch overflow-hidden rounded-[var(--radius-large)] bg-white/55 text-center md:h-[340px] lg:-ml-8 lg:h-[350px] lg:w-[calc(100%+var(--container-padding-desktop)+2rem)] lg:rounded-none"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[var(--color-background-light-blue)] to-transparent lg:block"
            />

            <div className="relative z-10 px-6">
              <p className="text-base font-semibold text-[var(--color-heading)]">
                About hero physiotherapy image
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Client-provided image will be added here.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutHero
