import HomeAbout from '../Components/Home/HomeAbout'
import HomeHero from '../Components/Home/HomeHero'
import HomeProcess from '../Components/Home/HomeProcess'
import HomeReviews from '../Components/Home/HomeReviews'
import HomeServices from '../Components/Home/HomeServices'
import HomeStats from '../Components/Home/HomeStats'

function Homepage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeAbout />
      <HomeProcess />
      <HomeReviews />
    </>
  )
}

export default Homepage
