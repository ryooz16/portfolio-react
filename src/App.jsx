import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <div className='w-4/6 mx-auto border-l-2 border-r-2 border-[#eaeaea]'>
        <Header />
        <main className=''>
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
 