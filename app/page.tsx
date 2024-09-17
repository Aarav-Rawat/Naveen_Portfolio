
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className=" bg-black-100 relative flex items-center justify-center flex-col overflow-hidden mx-auto text-white p-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <Overview/>
        <Projects/>
        <Footer/>
      </div>
    </main>
  );
}
