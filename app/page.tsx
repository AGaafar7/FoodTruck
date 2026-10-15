import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AlfredoSliderSection from "@/components/AlfredoSliderSection";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import FullMenu from "@/components/FullMenu";
import OrderAhead from "@/components/OrderAhead";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <AlfredoSliderSection />
      <About />
      <MenuSection />
      <FullMenu />
      <OrderAhead />
      <Events />
      <Reviews />
      <Contact />
    </main>
  );
}