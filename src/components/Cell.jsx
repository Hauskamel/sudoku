function Cell ({ input }) {

    function setInput (e) {
        input(e.target.value)        
    }

    return (
        <div className="cell">
            <input onChange={setInput} className="cell-input"></input>
        </div>
    )
}

export default Cell