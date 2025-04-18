import React, { useEffect, useState } from "react";
import Cell from "./Cell.jsx";


function Square ({ userInput }) {
    // sets an array of ['', '', '', '', '', '', '', '', '']
    const [squareMatrix, setSquareMatrix] = useState(Array.from({length: 9}, () => ''));
    const [errorCounter, setErrorCounter] = useState(0);
    const [resetIndex, setResetIndex] = useState(null);

    // function handles user input from 'Cell.jsx'
    function handleInput (input, index) {
        userInput(input, index)
    }

    // generates cells
    const cells = squareMatrix.map((_, index) => (
        <Cell
            input={(input) => handleInput(input, index)}
            key={index}
            shouldReset={index === resetIndex}
        />
    ));

    return (
        <div 
            className="square" 
            style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, gap: '10px' }}
        >
            {cells}
        </div>
    )
}

export default Square