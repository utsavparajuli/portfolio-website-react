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
              <small>7+ Completed </small>
            </article>


            
          </div>

          <p>
            Hi there! I am an aspiring software enginner who recently graduated from the University of California, Irvine with a B.S in Computer Science. 
            I have industry experiences as a Software Development Intern in Java, C++, C#, Python, and ASP.NET.

            <br />
            <br />
            I am currently working towards acquiring an entry-level role as a Software Engineer, Backend Developer, or Full-Stack Developer.
            In the meantime, I am also learning new skills to expand my horizon and improve my knowledge.
            In my next role, I strive to work in a dynamic environment that not only allows me to utilize 
            my existing skills but also facilitates the development of new ones. I aim to contribute by formulating innovative solutions that bring about a positive impact.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About