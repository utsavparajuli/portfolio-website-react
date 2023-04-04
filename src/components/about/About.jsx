import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About' />
          </div>

        </div>
        <div className="about__content">
          <div className='about__cards'>


            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years </small>
            </article>


            <article className='about__card'>
              <BsBookHalf className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>


            
          </div>

          <p>
            Hi there! I am a passionate student who is working towards a Bachelor's Degree in Computer Science at University of California Irvine. 
            I have industry experience as a Software Development Intern in Java, C++, C#, Python, and ASP.NET.

            <br />
            <br />
            After graduation, I would like to be involved within my interests of Backend Development, Full-Stack Development, Machine Learning, and AI. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About