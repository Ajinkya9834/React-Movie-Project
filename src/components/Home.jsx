
import Hero from './Hero';
import Header from './header/Header';
import Trending from './TrendingMovie';
import PopularMovies from './PopularMovies';
import LatestTrailers from './LatestTrailers';
import Footer from './Footer';
import JoinToday from './JoinToday';


function Home() {
  return (
    <div className=" text-white min-h-screen">
      <Header />
      <main>
        <Hero/>
        <Trending />
        <LatestTrailers/>
        <PopularMovies />
        <JoinToday/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home