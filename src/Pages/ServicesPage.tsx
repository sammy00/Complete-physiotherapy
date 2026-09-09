import AboutCTA from '../Components/About/AboutCTA'
import ServicesHero from '../Components/Services/ServicesHero'
import ServicesGrid from '../Components/Services/ServicesGrid'
import ServicesProcess from '../Components/Services/ServicesProcess'
import ServicesWhyChooseUs from '../Components/Services/ServicesWhyChooseUs'

function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhyChooseUs />
      <ServicesProcess />
      <AboutCTA />
    </main>
  )
}

export default ServicesPage
