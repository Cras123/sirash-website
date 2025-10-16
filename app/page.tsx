// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Experience from "./(sections)/Experience";
import Contact from "./(sections)/Contact";

export default function Home() {
  return (
    <main className="relative">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
