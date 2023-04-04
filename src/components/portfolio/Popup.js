import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <anchor className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>


        <div className='popup-content'>
          <h2>{props.title}</h2>
          <small>{props.desc}</small>
          <br />
          <br />
          <h4>Github</h4>
          <a href={props.github} target='_blank' rel='noreferrer'> <span className='text2'>{props.github}</span></a>
        </div>
      </div>
    </anchor>
  ) : "";
}

export default Popup

// var modalBtns = document.querySelectorAll('modal-open');

// modalBtns.forEach(function(btn) {
//   btn.onclick = function() {
//     var modal = btn.getAttribute('data-modal');

//     document.getElementById(modal).style.display = 'block';
//   };
// });