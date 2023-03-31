import React from 'react'
import './header.css'
import CTA from './CTA'
import Nav from '../nav/Nav'
// import ME from '../../assets/me.jpg'

const Header = () => {
  return (
    

    <div className='landing'>
      <Nav />
      <div className="container header__container">
      <img src="https://i.gifer.com/5RT9.gif" alt='landing-gif' width='200' height={200}/>
        <h1>Utsav Parajuli</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />

      {/* <div className='me'>
        <img src={ME} alt="me" />
      </div> */}
      </div>
    </div>

  )
}

export default Header