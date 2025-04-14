function Cell ({ input, inputValidationStatus }) {

    function setInput (e) {
        input(e.target.value)        
        console.log(inputValidationStatus);
    }

    return (
        <div className="cell">
            <input onChange={setInput} className="cell-input"></input>
        </div>
    )
}

export default Cell