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
            <img height='auto' width={455} src={ME} alt='About' />
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
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Est provident cupiditate mollitia ullam 
            natus officia ad libero vitae nihil nam dolorum vero voluptates, 
            impedit deleniti hic consequuntur eius unde nisi?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About