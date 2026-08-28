import ContactFeatures from '../Components/Contact/ContactFeatures'
import ContactForm from '../Components/Contact/ContactForm'
import ContactHero from '../Components/Contact/ContactHero'
import ContactInfo from '../Components/Contact/ContactInfo'
import ContactMap from '../Components/Contact/ContactMap'

function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInfo />

      <section
        id="appointment"
        className="scroll-mt-24 bg-[var(--color-background-soft)] pt-8 pb-3 md:pt-10 md:pb-4 lg:pt-12 lg:pb-5"
        aria-labelledby="contact-form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[var(--radius-card)] border border-[var(--color-divider)] bg-white p-4 shadow-[var(--shadow-card)] md:p-6 lg:grid-cols-[1.02fr_1fr] lg:items-stretch">
            <ContactForm />
            <ContactMap />
          </div>
        </div>
      </section>

      <ContactFeatures />
    </main>
  )
}

export default ContactPage
