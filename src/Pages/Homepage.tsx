import HomeAbout from '../Components/Home/HomeAbout'
import HomeHero from '../Components/Home/HomeHero'
import HomeProcess from '../Components/Home/HomeProcess'
import HomeReviews from '../Components/Home/HomeReviews'
import HomeServices from '../Components/Home/HomeServices'
import HomeStats from '../Components/Home/HomeStats'
import Seo from '../Components/layout/Seo'

function Homepage() {
  return (
    <main>
      <Seo
        title="Physiotherapy Clinic in Vadodara"
        description="Advanced physiotherapy care in Vadodara for pain relief, rehabilitation, mobility, sports injuries and long-term recovery."
        path="/home"
      />
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeAbout />
      <HomeProcess />
      <HomeReviews />
    </main>
  )
}

export default Homepage
