import { useEffect, useState } from "react";
import Square from "./Square";


function Board () {

    const [boardMatrix, setBoardMatrix] = useState(Array.from({length: 9}, () => []));
    const [userInput, setUserInput] = useState("");









    function handleSquareMatrix (matrix, index) {
        // create copy of boardMatrix
        const boardMatrixCopy = [...boardMatrix];


        const inputDoesAlreadyExistinBoardMatrix = boardMatrixCopy.some(
            (squareAarray) => squareAarray.includes(userInput)
        )


        // replace new matrix with matrix in Board Matrix
        matrixArray[index] = matrix

        // updates Borad Matrix
        setBoardMatrix(matrixArray)
    }

    function handleInput (input, index) {
        setUserInput(input);
    }








    // generates 9 squares
    const squares = Array.from({length: 3*3}, (_, index) => (
        <Square
            userInput={(input, index) => handleInput(input, index)}
            updatedSquareMatrix={(matrix) => handleSquareMatrix(matrix, index)}
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