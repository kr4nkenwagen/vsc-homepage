import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Trails from "@/components/Trails";
import TrailAreas from "@/components/TrailAreas";
import Stigbygge from "@/components/Stigbygge";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Trails />
        <TrailAreas />
        <Stigbygge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
