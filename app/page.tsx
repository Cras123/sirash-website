// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./(sections)/Hero";
import About from "./(sections)/About";
import Projects from "./(sections)/Projects";
import Experience from "./(sections)/Experience";
import Contact from "./(sections)/Contact";
import Blog from "./(sections)/Blog";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}
