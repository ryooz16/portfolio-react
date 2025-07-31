import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const location = useLocation()
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

  const sectionRefs = {
    '/': heroRef,
    '/about': aboutRef,
    '/project': projectRef,
  }
  
  useEffect(() => {
    const section = sectionRefs[location.pathname]
    if (section?.current) {
      section.current.scrollIntoView({ behavior: 'smooth' })
    }
  })

  return (
    <div className="bg-[#f5f5f5]">
      <div className='w-full md:w-4/6 mx-auto border-l-2 border-r-2 border-[#eaeaea]'>
        <Header />
        <main>
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectRef} className="scroll-mt-24">
            <Project /> 
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
};

export default App;
