import { useEffect, useState } from "react";
import Cell from "./Cell.jsx"


function Square () {
    const [isValid, setIsValid] = useState(true);

    const squareMatrix = [[], [], [], [], [], [], [], [], []];

    // cells that are inside of the square
    let cells = [];

    // function handles user input from 'Cell.jsx'
    function handleInput (input) {
        if (squareMatrix.includes(input)) {

            // NOTE: Abfrage funktioniert, nur wird der Status von 'isValid' nicht direkt geupdatet
            console.log("Zweimal die selbe Nummer");
            
            setIsValid(false)
            return;
        }
        
        // push user input to squareMatrix
        squareMatrix.push(input);
    }
    
    // generates cells for each row
    squareMatrix.forEach((cell, index) => {    
        cells.push(<Cell inputValidationStatus={isValid} input={handleInput(index)} key={`${cell}`}/>);
    })

    return (
        <div className="square" style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, gap: '10px' }}>
            {cells}
        </div>
    )
}

export default Square 