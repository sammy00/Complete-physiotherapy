import AboutDoctor from '../Components/About/AboutDoctor'
import AboutHero from '../Components/About/AboutHero'
import AboutApproach from '../Components/About/AboutApproach'
import AboutCTA from '../Components/About/AboutCTA'
import AboutStory from '../Components/About/AboutStory'
import AboutTrust from '../Components/About/AboutTrust'
import Seo from '../Components/layout/Seo'

function AboutPage() {
  return (
    <main>
      <Seo
        title="About"
        description="Learn about Dr. Vanita Patel's patient-centered physiotherapy care, clinical experience and recovery-focused treatment approach in Vadodara."
        path="/about"
      />
      <AboutHero />
      <AboutDoctor />
      <AboutStory />
      <AboutTrust />
      <AboutApproach />
      <AboutCTA />
    </main>
  )
}

export default AboutPage
