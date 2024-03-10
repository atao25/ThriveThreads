import React from 'react'
import './Body.css'

const Body = () => {
  

  return (
    <div className = "body-container">
      <div className = "side-panel">
        

        <div className = "section">
          <p className = "side1">Prioritizing Self-Care</p>
          <hr/>
        </div>


        <div className = "section">
          <p className = "side1">Quick & Healthy Recipes</p>
          <hr/>
        </div>


        <div className = "section">
          <p className = "side1">Mental Health Support</p>
          <hr/>
        </div>
       
          
          </div>
       

         <div className = "main">
         <div className="textbox-container">
          <textarea
            className="textbox"
            placeholder="Type your question here..."
            ></textarea>
          </div>
          <h2>Ask a question to start a thread!</h2>
         


        </div>

    </div>
   
  )
}

export default Body
