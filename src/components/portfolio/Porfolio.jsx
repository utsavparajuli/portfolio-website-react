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
    // github: "https://github.com/utsavparajuli/Tic-Tac-Toe-Client\nhttps://github.com/utsavparajuli/tic-tac-toe-services\nhttps://github.com/utsavparajuli/Messaging-Server\nhttps://github.com/utsavparajuli/MessagingAPI"
    github: "https://github.com/utsavparajuli/Tic-Tac-Toe-Client",
    description: "A full-stack network-based Tic Tac Toe game based on Java. " + 
                "Users can create an account, create a lobby and get matched with other players, " +
                "as well as view personal and global leaderboards. The backend architecture is based on utilizing microservices " +
                "and a custom messaging queue to facilitate communication."
  },

  {
    id: 2,
    image: IMG2,
    title: 'Search Engine',
    github: 'https://github.com/utsavparajuli/search-engine',
    description: "Web search engine written in Python that is capable of handling thousands of Web pages with a query response time " + 
                  "of under 300ms. Implemented the engine with an inverted index, vector space model, tf-idf factor and MapReduce paradigm."
  },

  {
    id: 3,
    image: IMG3,
    title: 'Web Crawler',
    github: 'https://github.com/utsavparajuli/spacetime-crawler4py',
    description: 'Python based web crawler that implements principles of the text acquisition phase of a search engine.'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crux Compiler',
    github: 'https://github.com/utsavparajuli/crux-compiler',
    description: 'Compiler for a small imperative programming language(Crux), using traditional compiler design approach. Went through different' +
    ' phases such as generating Parse Tree, Type Checking, IR, and assembly code generation. Final compiler successfuly generates x86 assembly code for given source code.'
  },

  {
    id: 5,
    image: IMG5,
    title: 'GHG Accounting Tool',
    github: 'N/A',
    description: 'Contributed to the automation of Alteryx\'s sustainibilty reporting for data visualization. Collaborated with the client ' +
                  'to gather raw data and design workflows in Alteryx Designer Platform. Final goal is to provide visualization of these built workflows.'
  },

  {
    id: 6,
    image: IMG6,
    title: '2D Graphics Modeler',
    github: 'https://github.com/utsavparajuli/CS1C-Group-Project',
    description: '2D Graphics Modeler completed by SCRUM development process designed in QT Creator. Ability to create, edit, and delete shapes. ' +
    'Users can log into their account and leave a review based on their liking of the application.'
  }
]
const Porfolio = () => {
  const [btnPopup, setBtnPopup] = useState(false);

  const [contentModal, setContentModal] = useState("");

  const [githubModal, setGithubModal] = useState("");

  const [descriptionModal, setDescModal] = useState("");

  
  return (
    <section id='projects' className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, description}) => {
            return (
              <div>
              <article key={id} className='portfolio_item'>
                  <img className='proj-img' src={image} alt={title} />
                  <div className="middle">
                    {/* <a href={github} target='_blank' rel='noreferrer'> */}
                    <button test="test" onClick={() => {setBtnPopup(true); setContentModal(title); setGithubModal(github); setDescModal(description)}}>

                    {/* <button id={id} onClick={() => setBtnPopup(true) setContentModal(title)}> */}
                      <div className='text'>
                        {title}
                      </div>
                    </button>
                  </div>

              </article>

              <Popup onClose={() =>setBtnPopup(false)} trigger={btnPopup} setTrigger={setBtnPopup} title={contentModal}
                github={githubModal} desc={descriptionModal}>

              {/* <Popup id={id} title={title} trigger={btnPopup} > */}

              </Popup>  

              </div>

            )
          })
        }
      </div>
    </section>
  )
}

export default Porfolio