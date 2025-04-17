
import React from 'react'
import Navbar from './components/NavBar'    
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './index.css' // Import your CSS file here
import Contact from './components/Contact'
function App() {
  return (
    <div className="bg-cream text-brown font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
     
    </div>
  );
}
export default App
