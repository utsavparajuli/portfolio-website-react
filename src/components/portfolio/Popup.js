import React from 'react'
import './Popup.css'

function Popup(props) {
    let title = props.title
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
            {title}
        </div>
    </div>
  ) : "";
}

export default Popup