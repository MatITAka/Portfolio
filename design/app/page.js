import Image from 'next/image'
import Navbar from "../components/navbar";
import ProjectsSection from "../components/projectsection";
import HeroSection from "../components/herosection";
import Contact from "../components/contact"
import Competences from "../components/competences"
import Footer from "../components/footer"



export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        
       <HeroSection/>

       <Competences/>
        
       <ProjectsSection />

        <Contact/>
       
      </div>
      <Footer/>
    </main>
  )
}
