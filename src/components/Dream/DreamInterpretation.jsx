//Chat
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './DreamInterpretation.css'
import queryData from './Query.json'; // Import the JSON file
import { useNavigate } from "react-router-dom";

function DreamInterpretation() {
    const navigate = useNavigate();

    const [selectedDream, setSelectedDream] = useState("");

  // Function to interpret the selected dream
  function interpretDream() {
    const chatBox = document.getElementById("chat-box");
    const dreamMeaning = getDreamMeaning(selectedDream);

    // Display interpreted dream title and meaning in chat box
    chatBox.innerHTML += "<p><strong>Your Dream :</strong> " + selectedDream + "</p>";
    chatBox.innerHTML += "<p><strong>Meaning : </strong> " + dreamMeaning + "</p>";
    
    // Scroll chat box to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Function to handle dropdown change
  function handleDropdownChange(selectedOption) {
    setSelectedDream(selectedOption.value);
  }

  // Function to get dream meaning
  function getDreamMeaning(dream) {
    const selectedDreamData = queryData.find(item => item.word === dream);
    return selectedDreamData ? selectedDreamData.def_paragraph : "No definition found";
  }

  // Options for React Select
  const options = queryData.map(item => ({ value: item.word, label: item.word }));

    return (
            <div className="dream-interpretation">
                <div className="Head-Text">
                    <h1>Dream Meaning</h1>
                </div>
                <div className="container-dreamInterpretation">
                    <div className="dropdown-dream">
                        <Select
                            options={options}
                            onChange={handleDropdownChange}
                            defaultValue={{ value: '', label: 'Choose your last night dream here!..' }}
                        />

                    </div>
                    <div id="chat-box"></div>
                    <div className='interpret-btnDiv'>
                        <button className='interpret-btn' onClick={interpretDream}>Interpret</button>
                    </div>
        
                </div>
            </div>
    )
}

export default DreamInterpretation