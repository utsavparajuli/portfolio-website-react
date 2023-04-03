import React from 'react'
import './portfolio.css'
import Popup from './Popup'

import IMG1 from '../../assets/img1-removebg-preview.png'
import IMG2 from '../../assets/search.png'
import IMG3 from '../../assets/webcrawler.png'
import IMG4 from '../../assets/dev.png'
import IMG5 from '../../assets/data.png'
import IMG6 from '../../assets/graphics.png'
import { useState } from 'react'



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
    image: IMG5,
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
  const [btnPopup, setBtnPopup] = useState(false);


  return (
    <section id='projects' className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, description}) => {
            return (
              <article key={id} className='portfolio_item'>
                  <img className='proj-img' src={image} alt={title} />
                  <div className="middle">
                    {/* <a href={github} target='_blank' rel='noreferrer'> */}
                    <button onClick={() => setBtnPopup(true)}>
                      <div className='text'>
                        {title}
                      </div>
                    </button>
                  </div>
                  <Popup title={title} trigger={btnPopup} setTrigger={setBtnPopup}>
                    {/* <div className='popup-content'>
                      <h2>{title}</h2>
                      {github}
                    </div> */}
                  </Popup>  
              </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Porfolio