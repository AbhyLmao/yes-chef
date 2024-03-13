import React from 'react'
import "./ChangeGUI.css"

function ChangeGUI() {
  return (
    <div className='changestuff'>
      <div className='changeprompt'>
        <div className="changetitle">Change Username</div>
        <div className="Form">
                    <div className='inputbox'>
                      <h3 className='inputitle'>Enter your new username</h3>
                      <input class="input" placeholder="...."/>
                    </div>
                    <button  className="button-28">Confirm</button>
                    
        </div>
      </div>
      
    </div>
    
  )
}

export default ChangeGUI