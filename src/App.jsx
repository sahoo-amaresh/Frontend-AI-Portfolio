import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Projects } from "@/section/Projects";
import { Experience } from "@/section/Experience";
import { Contact } from "@/section/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden select-none">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
