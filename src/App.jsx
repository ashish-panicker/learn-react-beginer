import React from 'react'
import './App.css'
import { sculptureList } from './data'

function App() {

  const [index, setIndex] = React.useState(0)
  let sculpture = sculptureList[index]

  function next() {
    let newindex = 0
    if (index === sculptureList.length - 1) {
      newindex = 0
    } else {
      newindex = index + 1
    }
    setIndex(newindex)
  }
  function previous() { }

  return (
    <>
      <h1>Sculptures</h1>
      <button onClick={next}>Next</button>
      <span>{index + 1} of {sculptureList.length}</span>
      <button>Previous</button>
      <h2> <i>{sculpture.name} </i> by {sculpture.artist}</h2>
      <p>{sculpture.description}</p>
    </>
  )
}

export default App
