import React , {useRef, useEffect} from 'react';

function Cell ({ input, shouldReset }) { // NOTE: 3. Hier neuen Prop erstellen 
    const inputRef = useRef();

    function setInput (e) {
        input(e.target.value)        
    }

    let counter = 0;

    useEffect(() => {
        if (shouldReset) {        
            inputRef.current.value = ""
        }
    }, [shouldReset])
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