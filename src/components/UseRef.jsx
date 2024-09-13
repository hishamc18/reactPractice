import React from 'react'
import { useRef } from 'react';

function UseRef() {
    const text = useRef(null);

    function focusField(){
        text.current.focus();
    }

  return (
    <div>
        <input ref={text}/>
        <button onClick={focusField}>Focus the Field</button>
        <br />
        <h2>Using useRef Hook</h2>
    </div>
  )
}

export default UseRef

