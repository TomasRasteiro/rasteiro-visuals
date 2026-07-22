import Hero from "@/components/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Navbar from "@/components/Navbar";
import FloatingSocials from "@/components/FloatingSocials";


export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Portfolio />

      <Contact />

      <Footer />

      <FloatingSocials />

    </main>
  );
}