import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1-removebg-preview.png'
import IMG2 from '../../assets/search.png'
import IMG3 from '../../assets/webcrawler.png'
import IMG4 from '../../assets/dev.png'
import IMG5 from '../../assets/data.png'
import IMG6 from '../../assets/graphics.png'




const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Multiplayer Game',
    github: 'https://github.com/utsavparajuli',
    description: ''
  },

  {
    id: 2,
    image: IMG2,
    title: 'Search Engine',
    github: 'https://github.com/utsavparajuli',
    description: ''
  },

  {
    id: 3,
    image: IMG3,
    title: 'Web Crawler',
    github: 'https://github.com/utsavparajuli',
    description: ''
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crux Compiler',
    github: 'https://github.com/utsavparajuli',
    description: ''
  },

  {
    id: 5,
    image: IMG1,
    title: 'GHG Accounting Tool',
    github: 'https://github.com/utsavparajuli',
    description: ''
  },

  {
    id: 6,
    image: IMG6,
    title: '2D Graphics Modeler',
    github: 'https://github.com/utsavparajuli',
    description: ''
  }
]
const Porfolio = () => {
  return (
    <section id='projects' className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
            <img className='proj-img' src={IMG1} alt='' />
            <div className="middle">
              <a href='https://github.com/utsavparajuli' target='_blank'>
                <div className='text'>
                  Multiplayer Game
                </div>
              </a>
            </div>  
        </article>



        <article className='portfolio_item'>
            <img className='proj-img' src={IMG2} alt='' />
            <div className="middle">
              <a href='https://github.com/utsavparajuli' target='_blank'>
                <div className='text'>
                  Search Engine
                </div>
              </a>
            </div>  
        </article>


        <article className='portfolio_item'>
            <img className='proj-img' src={IMG3} alt='' />
            <div className="middle">
              <a href='https://github.com/utsavparajuli' target='_blank'>
                <div className='text'>
                  Web Crawler
                </div>
              </a>
            </div>  
        </article>


        <article className='portfolio_item'>
            <img className='proj-img' src={IMG4} alt='' />
            <div className="middle">
              <a href='https://github.com/utsavparajuli' target='_blank'>
                <div className='text'>
                  Crux Compiler
                </div>
              </a>
            </div>  
        </article>


        <article className='portfolio_item'>
            <img className='proj-img' src={IMG5} alt='' />
            <div className="middle">
              <a href='https://github.com/utsavparajuli' target='_blank'>
                <div className='text'>
                  GHG Accounting Tool
                </div>
              </a>
            </div>  
        </article>


        <article className='portfolio_item'>
            <img className='proj-img' src={IMG6} alt='' />
            <div className="middle">
              <a href='https://github.com/utsavparajuli' target='_blank'>
                <div className='text'>
                  2D Graphics Modeler
                </div>
              </a>
            </div>  
        </article>
      </div>
    </section>
  )
}

export default Porfolio