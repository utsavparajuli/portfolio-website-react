import React from 'react'
import {useState, useEffect} from 'react'
import './nav.css'
import HOME from '../../assets/homeLogo.png'


const Nav = () => {
  const [fix, setFix] = useState(false);

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
              <a href="/#">
                <img src={HOME} alt="home" width={40} height={40}/>
              </a>
            </li>
          </ul>

          <ul className='right-nav'>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Projects</a></li>
            <li><a href="/#">Experience</a></li>
            <li><a href="/#">Skills</a></li>
            <li><a href="/#">Contact</a></li>




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