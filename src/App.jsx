import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Porfolio from './components/portfolio/Porfolio'
import Skills from './components/skills/Skills'


const App = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Porfolio></Porfolio>
      <Contact></Contact>
    </>
  )
}

export default App