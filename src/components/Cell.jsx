import React , {useRef, useEffect} from 'react';

function Cell ({ input, shouldReset }) { // NOTE: 3. Hier neuen Prop erstellen 
    const inputRef = useRef();

    function setInput (e) {
        input(e.target.value)        
    }

    useEffect(() => {
        // NOTE: 3. (gehört zu Prop oben) useEffect nach Prop richten -> wenn "true", dann reset input state zu ""
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