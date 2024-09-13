import './App.css'
import NameList from './components/NameList'
import FetchEvent from './components/FetchEvent'
import Counter from './components/Counter'
import React, {useState} from 'react'

function App() {

const [selectedDiv, setSelectedDiv] = useState(null);

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

  return (
      <div className='App'>
        <NameList />
        <FetchEvent />
        <Counter />
        
        <div>
                      {Array.from({ length: 4 }, (_, index) => (
                <div
                    onClick={() => handleDivClick(index)}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: selectedDiv === null || selectedDiv === index ? "pink" : "green",
                        border: "1px solid black",
                    }}
                ></div>
            ))}
        </div>
      </div>
  )
}

export default App