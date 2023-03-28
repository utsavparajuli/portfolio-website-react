import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Porfolio from './components/portfolio/Porfolio'
import Skills from './components/skills/Skills'


const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Porfolio></Porfolio>
      <Contact></Contact>
      <Testimonials></Testimonials>
    </>
  )
}

export default App