import ContactFeatures from '../Components/contact/ContactFeatures'
import ContactForm from '../Components/contact/ContactForm'
import ContactHero from '../Components/contact/ContactHero'
import ContactInfo from '../Components/contact/ContactInfo'
import ContactMap from '../Components/contact/ContactMap'

function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInfo />

      <section
        id="appointment"
        className="scroll-mt-24 bg-(--color-background-soft) pt-8 pb-3 md:pt-10 md:pb-4 lg:pt-12 lg:pb-5"
        aria-labelledby="contact-form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-(--radius-card) border border-(--color-divider) bg-white p-4 shadow-(--shadow-card) md:p-6 lg:grid-cols-[1.02fr_1fr] lg:items-stretch">
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
