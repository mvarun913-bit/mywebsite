import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Travel from "../components/Travel";
import Contact from "../components/Contact";
import SocialSidebar from "../components/SocialSidebar";
import CursorFollower from "../components/CursorFollower";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <SocialSidebar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Travel />
        <Contact />
      </main>
    </>
  );
}
