import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journeys from "./components/Journeys";
import JourneyDetail from "./components/JourneyDetail";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import About from "./components/About";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import journeys from "./data/journeys";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Journeys />

      {journeys.map((j) => (
        <JourneyDetail key={j.id} j={j} />
      ))}

      <Gallery />
      <Videos />
      <About />
      <Instagram />
      <Footer />
    </div>
  );
}
