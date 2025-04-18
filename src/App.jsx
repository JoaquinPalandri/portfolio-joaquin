
import React from 'react'
import Navbar from './components/Navbar' 
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects.Tsx'
import './index.css' // Import your CSS file here
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="bg-cream text-brown font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  );
}
export default App
