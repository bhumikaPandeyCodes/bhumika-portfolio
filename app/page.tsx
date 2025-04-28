import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className=" h-full w-full font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-dark-black to-gray-700 p-8 flex flex-col items-center  overflow-x-hidden" id="trackingElement">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <Footer />
    </div>
  );
}
