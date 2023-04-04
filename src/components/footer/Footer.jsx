import React from 'react'
import './footer.css'
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className='footer__socials'>
            <a href='https://github.com/utsavparajuli' target='_blank' rel='noreferrer'><AiFillGithub className='icon-social'/></a>
            <a href='https://www.linkedin.com/in/utsav-p-137625101/' target='_blank' rel='noreferrer'><AiFillLinkedin className='icon-social'/></a>

        </div>

        <div className="footer__copyright">
            <small>&copy; Utsav Parajuli. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer