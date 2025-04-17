import React , {useRef, useEffect} from 'react';

function Cell ({ input, updateValue }) {
    const inputRef = useRef();

    function setInput (e) {
        input(e.target.value)        
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = ""; // clear input
        }
    }, [updateValue])
    return (
        <div className="cell">
            <input 
                ref={inputRef}
                onChange={setInput} 
                className="cell-input"
            >
            </input>
        </div>
    )
}

export default Cell