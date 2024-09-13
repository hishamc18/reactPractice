import React, {useState} from 'react'

function Counter() {

    const [Count, setCount] = useState(0);

    function incrementCount(){
        setCount(Count + 1)
    }

    
  return (
    <div>
        <h1>Counter: {Count}</h1>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default Counter
