import React from 'react'
import './experience.css'
import {GoVerified} from 'react-icons/go'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      <div className='container experience__container'>

      <div className='experience__languages'>
          <h3>Programming Languages</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>


            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


          </div>
        </div>

        <div className='experience__tools'>
          <h3>Tools / Frameworks</h3>
          <div className="experience__content">

          <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article> 

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>ASP .NET</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            
            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Blazor</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>



            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Alteryx</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>scikit-learn</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
              
            
            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>CI/CD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            
            <article className='experience__details'>
              <GoVerified className='experience__details-icon' />
              <div>
                <h4>Tableau</h4>
                <small className='text-light'>Beginner</small>
              </div>
              
            </article>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience