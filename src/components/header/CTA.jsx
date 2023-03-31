import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" rel='noreferrer' className='btn'>Resume</a>
        <a href='#about' className='btnB'>Start</a>

    </div>
  )
}
export default CTA