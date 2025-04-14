import React, { useEffect, useState } from "react";
import Cell from "./Cell.jsx";


function Square () {
    const [squareMatrix, setSquareMatrix] = useState(Array.from({length: 9}, () => ''));

    // function handles user input from 'Cell.jsx'
    function handleInput (value, index) {
        // push user input to squareMatrix
        const updateMatrix = [...squareMatrix];
        updateMatrix[index] = value;
        setSquareMatrix(updateMatrix)
    }
    
    // generates cells
    const cells = squareMatrix.map((_, index) => (
        <Cell
            input={(value) => handleInput(value, index)}
            key={index}
        />
    ));

    return (
        <div className="square" style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, gap: '10px' }}>
            {cells}
        </div>
    )
}

export default Square 