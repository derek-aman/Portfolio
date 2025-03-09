import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skill/Skill.jsx'

import Projects from './Components/Project/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import SkillsScroll from './Components/SkillsScroll/SkillsScroll.jsx'


const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <About/>
      <SkillsScroll/>
      <Skills/>
      <Projects/>
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
