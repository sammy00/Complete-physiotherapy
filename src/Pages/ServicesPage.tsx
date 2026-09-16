import AboutCTA from '../Components/About/AboutCTA'
import ServicesHero from '../Components/Services/ServicesHero'
import ServicesGrid from '../Components/Services/ServicesGrid'
import ServicesProcess from '../Components/Services/ServicesProcess'
import ServicesWhyChooseUs from '../Components/Services/ServicesWhyChooseUs'
import Seo from '../Components/layout/Seo'

function ServicesPage() {
  return (
    <main>
      <Seo
        title="Services"
        description="Explore physiotherapy services for back pain, neck pain, sports injury, post-surgery recovery, geriatric care and women's health in Vadodara."
        path="/services"
      />
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhyChooseUs />
      <ServicesProcess />
      <AboutCTA />
    </main>
  )
}

export default ServicesPage
