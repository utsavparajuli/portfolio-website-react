import React from 'react'
import {useState, useEffect} from 'react'
import './nav.css'
import HOME from '../../assets/homeLogo.png'


const Nav = () => {
  const [fix, setFix] = useState(false);

  const [activeNav, setActiveNav] = useState('#')
  useEffect(()=> {
    const handleScroll = () => {
      setFix(window.scrollY > 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  window.addEventListener("scroll", setFix)
  return (
    <header>
            {/* <nav className='nav-container'> */}

      <nav className={fix ? "fix" : ""}>
        <div className='nav-container'>
          <ul className='left-nav'>
            <li>
              <a href="#">
                <img src={HOME} alt="home" width={40} height={40}/>
              </a>
            </li>
          </ul>

          <ul className='right-nav'>
            <li>
                
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : 'menuBtn'}> 
                  <span> Home </span>
                </a>
            </li>
            <li>
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : 'menuBtn'}>
                <span>About</span>
              </a>
            </li>
            <li><a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : 'menuBtn'}><span>Experience</span></a></li>
            <li><a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : 'menuBtn'}><span>Projects</span></a></li>
            <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : 'menuBtn'}><span>Contact</span></a></li>




          </ul>
        </div>
        
        
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul> */}
      </nav>
    </header>
    
  )
}

export default Nav