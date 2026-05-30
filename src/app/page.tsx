import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Travel from "../components/Travel";
import Contact from "../components/Contact";
import SocialSidebar from "../components/SocialSidebar";

export default function Home() {
  return (
    <>
    <SocialSidebar />
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
