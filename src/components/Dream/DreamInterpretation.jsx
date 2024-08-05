import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';
//import '../../assets/DreamInterpretation.css';
import queryData from './Query.json'; // Import the JSON file
import { useNavigate } from "react-router-dom";

// VirtualizedMenuList component for react-window
const VirtualizedMenuList = ({ options, children, getValue }) => {
    const height = 300;
    const itemHeight = 35;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * itemHeight;

    const Row = ({ index, style }) => (
        <div style={style}>
            {children[index]}
        </div>
    );

    return (
        <List
            height={height}
            itemCount={children.length}
            itemSize={itemHeight}
            initialScrollOffset={initialOffset}
            width="100%"
        >
            {Row}
        </List>
    );
};

function DreamInterpretation() {
    const navigate = useNavigate();
    const [selectedDream, setSelectedDream] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to interpret the selected dream
    function interpretDream() {
        const chatBox = document.getElementById("chat-box");
        const dreamMeaning = getDreamMeaning(selectedDream);

        // Create new paragraph elements for interpreted dream title and meaning
        const newDreamPara = document.createElement("p");
        newDreamPara.innerHTML = "<strong>Your Dream :</strong> " + selectedDream;

        const newMeaningPara = document.createElement("p");
        newMeaningPara.innerHTML = "<strong>Meaning : </strong> " + dreamMeaning;

        // Prepend the new elements to the chat box
        chatBox.prepend(newMeaningPara);
        chatBox.prepend(newDreamPara);
        chatBox.scrollTop = 0;
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
    const options = useMemo(() => queryData.map(item => ({ value: item.word, label: item.word })), []);

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
                        components={{ MenuList: VirtualizedMenuList }}
                    />
                </div>
                <div id="chat-box"></div>
                <div className='interpret-btnDiv'>
                    <button className='interpret-btn' onClick={interpretDream}>Interpret</button>
                </div>
            </div>
        </div>
    );
}

export default DreamInterpretation;
