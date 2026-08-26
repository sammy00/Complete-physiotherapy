import { Mail, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Container from '../Ui/Container'
import ContactInfoCard from './ContactInfoCard'

function ContactInfo() {
  return (
    <section aria-label="Contact information" className="relative z-10 -mt-6">
      <Container>
        <div className="min-w-0 rounded-(--radius-card) bg-white p-4 shadow-(--shadow-card) sm:p-5 md:px-7 md:py-6">
          <div className="grid min-w-0 gap-6 lg:grid-cols-3 lg:gap-0">
            {/* Clinic Address */}
            <div className="min-w-0 lg:border-r lg:border-(--color-divider) lg:pr-6">
              <ContactInfoCard
                title="Visit Our Clinic"
                actionLabel="Get Directions"
                actionHref="https://www.google.com/maps/search/?api=1&query=227+228+Rajpath+Complex+Nr+Bright+day+school+Opp+Nayra+Petrol+Pump+Vasna+Bhayli+Road+Vadodara+391410"
                icon={<MapPin size={22} strokeWidth={1.8} />}
              >
                <address className="not-italic">
                  227, 228 Rajpath Complex,
                  <br />
                  Nr Bright Day School, Opp. Nayra
                  <br />
                  Petrol Pump, Vasna Bhayli Road,
                  <br />
                  Vadodara – 391410
                </address>
              </ContactInfoCard>
            </div>

            {/* WhatsApp */}
            <div className="min-w-0 lg:border-r lg:border-(--color-divider) lg:px-6">
              <ContactInfoCard
                title="WhatsApp Us"
                actionLabel="Chat on WhatsApp"
                actionHref="https://wa.me/919925418176"
                iconClassName="bg-(--color-emerald)"
                icon={<FaWhatsapp size={24} />}
              >
                <a
                  href="https://wa.me/919925418176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-colors hover:text-(--color-primary-blue)"
                >
                  +91 99254 18176
                </a>
              </ContactInfoCard>
            </div>

            {/* Email */}
            <div className="min-w-0 lg:pl-6">
              <ContactInfoCard
                title="Email Us"
                actionLabel="Send an Email"
                actionHref="mailto:completephysio2018@gmail.com"
                icon={<Mail size={22} strokeWidth={1.8} />}
              >
                <a
                  href="mailto:completephysio2018@gmail.com"
                  className="inline-block max-w-full text-sm wrap-anywhere transition-colors hover:text-(--color-primary-blue)"
                >
                  completephysio2018@gmail.com
                </a>
              </ContactInfoCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactInfo
