import { useEffect } from "react";
import Square from "./Square";


function Board () {



    function handleSquareMatrix (matrix, id) {
        console.log(matrix, id);
    }


    function handleInput (input, index) {
        console.log(input);
        
    }




    // shallow copy squareMatrix array
    // const updateMatrix = [...squareMatrix];

    // square alredy contains that number
    // const isDuplicate = updateMatrix.some(
    //     // checks if some element in the 'updateMatrix' Array matches with 'inut' AND if the index of the element in the updateMatrix Array DOES NOT equal the index of the Cell the input comes from (itself)
    //     (elem, i) => elem === input && i !== index
    // )

    // if (isDuplicate) {
    //     const dummyCounter = errorCounter + 1
    //     setErrorCounter(dummyCounter)
        
    //     // resets input
    //     setResetIndex(null)

    //     // reset index
    //     setTimeout(() => {
    //         setResetIndex(index)
    //     }, 1000);
    //     window.alert("Diese Zahl existiert in diesem 3x3 Block bereits. + Fehler: " + dummyCounter)
    //     return;
    // }
    
    // // replace input at index in updateMatrix array
    // updateMatrix[index] = input;
    // // updates the squareMatrix
    // setSquareMatrix(updateMatrix);
    // currentMatrix(updateMatrix);









    const squares = Array.from({length: 3*3}, (_, index) => (
        <Square
            userInput={(input, index) => handleInput(input, index)}
            currentMatrix={(matrix) => handleSquareMatrix(matrix, index)}
            key={index}
            classname="square" />
    ))

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, gap: '10px' }}>
            {squares}
        </div>
    )
}

export default Board;