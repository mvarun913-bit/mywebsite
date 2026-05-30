import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Travel from "../components/Travel";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Travel />
        <Contact />
      </main>
    </>
  );
}
