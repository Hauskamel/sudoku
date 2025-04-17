import React, { useEffect, useState } from "react";
import Cell from "./Cell.jsx";


function Square () {
    // sets an array of ['', '', '', '', '', '', '', '', '']
    const [squareMatrix, setSquareMatrix] = useState(Array.from({length: 9}, () => ''));
    const [isValid, setIsValid] = useState(true);

    // function handles user input from 'Cell.jsx'
    function handleInput (input, index) {
        // shallow copy squareMatrix array
        const updateMatrix = [...squareMatrix];

        // square alredy contains that number
        const isDuplicate = updateMatrix.some(
            (elem) => elem === input // returns true or false when checking if array contains input 
        )

        if (isDuplicate) {
            setIsValid(false)
            return;
        }
        
        // replace input at index in updateMatrix array
        updateMatrix[index] = input;
        // updates the squareMatrix
        setSquareMatrix(updateMatrix);
    }

    
    // generates cells
    const cells = squareMatrix.map((_, index) => (
        <Cell
            input={(input) => handleInput(input, index)}
            key={index}
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