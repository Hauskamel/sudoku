import React, { useEffect, useState } from "react";
import Cell from "./Cell.jsx";


function Square () {
    // sets an array of ['', '', '', '', '', '', '', '', '']
    const [squareMatrix, setSquareMatrix] = useState(Array.from({length: 9}, () => ''));

    // NOTE: 1. hier state 'resetIndex' erstellen, um den Index der Zelle mit dem Duplikat zu speichern - State ursprünglich auf "null"
    //          Das ermöglicht dem Parent Component (Square) dem Child (Cell) zu sagen "Hey Cell {index}, you typed a duplicate -> reset yourself."
    const [resetIndex, setResetIndex] = useState(null)

    // function handles user input from 'Cell.jsx'
    function handleInput (input, index) {
        // shallow copy squareMatrix array
        const updateMatrix = [...squareMatrix];

        // square alredy contains that number
        const isDuplicate = updateMatrix.some(
            // checks if some element in the 'updateMatrix' Array matches with 'inut' AND if the index of the element in the updateMatrix Array DOES NOT equal the index of the Cell the input comes from (itself)
            (elem, i) => elem === input && i !== index
        )

        if (isDuplicate) {
            // reset index
            setResetIndex(index)
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
            shouldReset={index === resetIndex}
            // NOTE: 2. Hier Zelle über dessen Index Bescheid geben (Parent sagt Cell, welchen Index diese hat, da Index von Parent bestimmt wird)

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