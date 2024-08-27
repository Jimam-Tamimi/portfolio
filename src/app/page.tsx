import About from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
 <>  
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
 
 </>
  );
}
