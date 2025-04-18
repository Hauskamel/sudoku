import React, { useEffect, useState } from "react";
import Cell from "./Cell.jsx";


function Square ({ userInput, updatedSquareMatrix }) {

    // sets an array of ['', '', '', '', '', '', '', '', ''] (9 Zellen)
    const [squareMatrix, setSquareMatrix] = useState(Array.from({length: 9}, () => ''));
    const [errorCounter, setErrorCounter] = useState(0);
    const [resetIndex, setResetIndex] = useState(null);





    // function handles user input from 'Cell.jsx'
    function handleInput (input, index) {

        // updates and creates shallow copy squareMatrix array
        const updateMatrix = [...squareMatrix];

        // check if 'updateMatrix' already contains the users input
        const inputDoesAlreadyExistInSqureaMatrix = updateMatrix.some(
            // checks if some element in the 'updateMatrix' Array matches with 'inut' AND if the index of the element in the updateMatrix Array DOES NOT equal the index of the Cell the input comes from (itself)
            (elem, i) => elem === input && i !== index
        )
        
        if (inputDoesAlreadyExistInSqureaMatrix) {
        
            setErrorCounter((prev) => {
                const updated = prev + 1;

                // NOTE: Wird auf Grund von React 2x ausgeführt
                window.alert("Diese Zahl existiert in diesem 3x3 Block bereits. :( Fehler: " + updated)

                return updated;      
            })
            
            // resets index
            setResetIndex(null)

            // set restIndex to index in updateMatrix
            setTimeout(() => {
                setResetIndex(index)
            }, 1000);
            return;
        }
        
        // replace input at index 
        updateMatrix[index] = input;

        // updates the squareMatrix
        setSquareMatrix(updateMatrix);
        userInput(input, index);
        updatedSquareMatrix(updateMatrix);
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