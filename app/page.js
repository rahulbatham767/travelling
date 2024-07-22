import FooterSection from "./components/FooterSection";
import TourCard from "./components/TourCard";
import { TravelCarousel } from "./components/TravelCarousel";
import TravelServices from "./components/TravelServices";

export default function Home() {
  return (
    <main>
      <TravelCarousel />
      <TravelServices />
      <TourCard />
      <FooterSection />
    </main>
  );
}
