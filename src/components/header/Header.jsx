import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.jpg'
import HOME from '../../assets/homeLogo.png'

const Header = () => {
  return (
    
    <header>
      <div className='container home'>
        <a href="/#">
          <img src={HOME} alt="home" width={40} height={40}/>
        </a>  
      </div>

      <div className="container header__container">
        <div className='row'>

        </div>


        <h1>Utsav Parajuli</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />

        {/* <div className='me'>
          <img src={ME} alt="me" />
        </div> */}
      </div>

    </header>
  )
}

export default Header