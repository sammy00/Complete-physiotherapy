import AboutCTA from '../Components/About/AboutCTA'
import PatientReviews from '../Components/Reviews/PatientReviews'
import ReviewsHero from '../Components/Reviews/ReviewsHero'
import VideoTestimonials from '../Components/Reviews/VideoTestimonials'
import Seo from '../Components/layout/Seo'

function ReviewsPage() {
  return (
    <main>
      <Seo
        title="Patient Reviews"
        description="Read genuine patient reviews and recovery stories for Dr. Vanita's Complete Physiotherapy in Vadodara."
        path="/reviews"
      />
      <ReviewsHero />
      <PatientReviews />
      <VideoTestimonials />
      <AboutCTA />
    </main>
  )
}

export default ReviewsPage
