import React from 'react'
import './Body.css'
import { useState } from 'react';
import { promptChat, promptRerank } from './cohere';

const Body = () => {
  const [message, setMessage] = useState('');
    const callChat = (prompt) => {
        promptChat(prompt).then(res => setMessage(res));
    } 

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('Ask a question to start a thread!');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        setOutputText(inputText);
        callChat(inputText);
        setMessage("Generating answer...")
    };

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
            value={inputText}
            onChange={handleInputChange}
            className="textbox"
            placeholder="Type your question here..."
            ></textarea>
            <button onClick={() => handleSubmit()}>
                    Submit!
            </button>
          </div>
          <h2>{outputText}</h2>
          <p>{message}</p>


        </div>

    </div>
   
  )
}

export default Body
