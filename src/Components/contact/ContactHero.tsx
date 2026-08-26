import Container from '../Ui/Container'
import ImagePlaceholder from '../Ui/ImagePlaceholder'
import SectionHeading from '../Ui/SectionHeading'

function ContactHero() {
  return (
    <section
      id="contact"
      className="bg-(--color-background-light-blue)"
      aria-labelledby="contact-hero-title"
    >
      <Container>
        <div className="grid min-w-0 items-center gap-8 py-10 md:gap-12 md:py-12 lg:grid-cols-2 lg:gap-16 lg:py-14">
          {/* Content */}
          <div className="min-w-0">
            <SectionHeading
              id="contact-hero-title"
              eyebrow="CONTACT US"
              title={
                <>
                  We're Here to Help You{' '}
                  <span className="text-(--color-emerald)">Move Better.</span>
                </>
              }
            description="Have a question or need to book an appointment? Reach out to us — we'd love to hear from you."
          />
          </div>

          {/* Image */}
          <ImagePlaceholder
            label="Physiotherapy Clinic Image"
            description="Client-provided image will be added here."
            className="min-h-64 md:min-h-72 lg:min-h-80"
          />
        </div>
      </Container>
    </section>
  )
}

export default ContactHero
