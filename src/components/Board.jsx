import Square from "./Square";


function Board () {

    const squares = Array.from({length: 3*3}, (_, index) => (
        <Square key={index} classname="square" />
    ))

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, gap: '10px' }}>
            {squares}
        </div>
    )
}

export default Board;