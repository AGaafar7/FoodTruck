import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import MenuGrid from "@/components/MenuGrid";
import Reservation from "@/components/Reservation";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <MenuSection />
      <MenuGrid />
      <Reservation />
      <Events />
      <Reviews />
      <Contact />
    </main>
  );
}