import CarouselHeroSectionEventCard from '../../Components/CarouselHeroSectionEventCard/CarouselHeroSectionEventCard.jsx'
import HeroSectionEventCard from '../../Components/HeroSectionEventCard/HeroSectionEventCard.jsx'
import './Home.css'

export default function Home() {
  return (
    <div>
      <section>
        <h1>Be My Guest App</h1>
        <h4>
          A social meeting platform <br />
          Designed to help people get to know each other <br />
          By hosting and creating an event or joining a social gatherings that
          already exist in the App.
        </h4>
        <CarouselHeroSectionEventCard />
      </section>

      <section>
        <h1>Our Upcoming Events</h1>
        <h6>
          You are free to choose from the Event list
          <br /> The event that draws you in to discover, explore, and engage.
        </h6>
        <HeroSectionEventCard />
        <HeroSectionEventCard />
        <HeroSectionEventCard />
        <HeroSectionEventCard />
        <HeroSectionEventCard />
      </section>
      <button>View More Events</button>
    </div>
  )
}
