import './App.css'
import './assets/grid.css'
import Square from './components/Square.jsx'

function App() {
    let squares = [];
    let counter = 0;

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            counter++
            squares.push(<Square key={counter} classname="Test" />)
        }
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${3}, 1fr)`, gap: '10px' }}>
            {squares}
        </div>
    )
}

export default App
