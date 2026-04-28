import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/Info"
import Services from "@/components/Services"
import CTA from "@/components/CTA"
import Contact from "@/components/Contacto"
import Footer from "@/components/Footer"
import Performance from "@/components/Performance"
import Projects from "@/components/Proyects"
import Member from "@/components/Member"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Member />
        <Services />
        <Projects />
        <Performance /> 
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
