import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Porfolio from './components/portfolio/Porfolio'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <Porfolio></Porfolio>
        <Contact></Contact>
        <Footer></Footer>
      
    </>
  )
}

export default App