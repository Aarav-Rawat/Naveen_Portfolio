
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className=" bg-black-100 relative flex items-center justify-center flex-col overflow-hidden mx-auto text-white py-2 px-20">
      <div className="">
        <Hero />
        <Overview/>
        <section id="projects">
        <Projects/>
        </section>
        <Footer/>
      </div>
    </main>
  );
}
