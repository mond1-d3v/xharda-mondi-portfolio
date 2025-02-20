import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Encryption from './components/main/Encryption';
import LampDemo from "./components/main/Lamp";
import Projects from "./components/main/Projects";
import Certifications from "./components/main/Certifications";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <LampDemo />
        <Certifications />
        <Projects />
        <Encryption />
      </div>
    </main>
  );
}
