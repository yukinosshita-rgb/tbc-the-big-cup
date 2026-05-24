import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import MenuSection from "@/components/MenuSection";
import Reviews from "@/components/Reviews";
import Events from "@/components/Events";
import Franchise from "@/components/Franchise";
import Footer from "@/components/Footer";
import TimeBomb from "@/components/TimeBomb";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <MenuSection />
      <Events />
      <Reviews />
      <Franchise />
      <Footer />
      <TimeBomb />
    </>
  );
}
