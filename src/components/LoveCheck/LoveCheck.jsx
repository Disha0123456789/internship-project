import React, { useState, useEffect } from 'react';
import './LoveCheck.css';

const LoveCheck = () => {
    const [tapCount, setTapCount] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [colors, setColors] = useState([]);
    const [loveMessage, setLoveMessage] = useState('');
    const [messageSequence, setMessageSequence] = useState([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const maxPetals = 12; // Maximum number of petals

    const generateRandomColor = () => {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        // Check if the color starts with #f, if so, generate a new color
        if (color[1] === 'f') {
            return generateRandomColor(); // Recursive call to generate a new color
        }
        //console.log(color);
        return color;
    };

    useEffect(() => {
        // Generate initial message sequence with alternating "Love" and "Not Love"
        const initialSequence = ['Love', "Doesn't Love"];
        setMessageSequence(initialSequence);

        // Shuffle the initial sequence to ensure unpredictability
        shuffleMessageSequence(initialSequence);

        // Generate and shuffle colors for petals
        const initialColors = Array(maxPetals).fill().map(() => generateRandomColor());
        shuffleColors(initialColors);
    }, []);

    useEffect(() => {
        // Set the love message based on the current message sequence
        setLoveMessage(messageSequence[currentMessageIndex]);
    }, [messageSequence, currentMessageIndex]);

    const shuffleMessageSequence = (sequence) => {
        for (let i = sequence.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
        }
    };

    const shuffleColors = (colors) => {
        for (let i = colors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colors[i], colors[j]] = [colors[j], colors[i]];
        }
        setColors(colors);
    };

    const handleTap = (index) => {
        if (!completed && tapCount < maxPetals && colors[index] != 'transparent') {
            const newColors = [...colors];
            newColors[index] = 'transparent'; // Change the color of the clicked petal to transparent
            setColors(newColors);
            setTapCount(tapCount + 1);

            // Update the current message index for the next petal removal
            setCurrentMessageIndex((currentMessageIndex + 1) % 2);

            if (tapCount === maxPetals - 1) {
                setCompleted(true);
            }
        }
    };


    const restart = () => {
        setTapCount(0);
        setCompleted(false);
        // Regenerate and shuffle colors for petals
        const initialColors = Array(maxPetals).fill().map(() => generateRandomColor());
        shuffleColors(initialColors);
        setLoveMessage('');
        setCurrentMessageIndex(0);
        shuffleMessageSequence(messageSequence); // Reshuffle the message sequence for unpredictability
    };

    return (
        <div className="lovecheck">
            <div className="Head-Text">
                <h1>Love Check</h1>
            </div>
            <div className='caution'>
                    <h2>Tap on Petels to remove it</h2>
            </div>
            <div className="container">
                <div className="flower">
                    <div className="petals">
                        {colors.map((color, index) => (
                            <div key={index} className="petal" style={{ backgroundColor: color }} onClick={() => handleTap(index)}></div>
                        ))}
                    </div>
                </div>
                <div className="message">
                    {loveMessage && <p className="love-message">{loveMessage}</p>}
                </div>
                {completed && (
                    <button className="restart-button" onClick={restart}>Restart</button>
                )}
            </div>
        </div>
    );
};

export default LoveCheck;
