import LiveStatusBar from "@/components/LiveStatusBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NextStop from "@/components/NextStop";
import Marquee from "@/components/Marquee";
import AlfredoSliderSection from "@/components/AlfredoSliderSection";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import FullMenu from "@/components/FullMenu";
import OrderAhead from "@/components/OrderAhead";
import WhereWeAre from "@/components/WhereWeAre";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <LiveStatusBar />
      <Navbar />
      <Hero />
      <NextStop />
      <Marquee />
      <AlfredoSliderSection />
      <About />
      <MenuSection />
      <FullMenu />
      <OrderAhead />
      <WhereWeAre />
      <Reviews />
      <Contact />
    </main>
  );
}