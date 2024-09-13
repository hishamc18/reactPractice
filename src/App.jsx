import './App.css'
import NameList from './components/NameList'
import FetchEvent from './components/FetchEvent'
import Counter from './components/Counter'
import React from 'react'
import UseRef from './components/UseRef'
import ColorChange from './components/ColorChange'
import PlayPause from './components/PlayPause'



function App() {
  return (
      <div className='App'>
        <NameList />
        <FetchEvent />
        <Counter />
        <UseRef />
        <ColorChange />
        <PlayPause />
      </div>
  )
}

export default App