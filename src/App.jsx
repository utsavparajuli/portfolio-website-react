import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Porfolio from './components/portfolio/Porfolio'


const App = () => {
  return (
    <>
      <div className='body-blur'>
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <Porfolio></Porfolio>
        <Contact></Contact>
      </div>
      
    </>
  )
}

export default App