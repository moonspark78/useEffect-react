import { useEffect, useState } from 'react'
import './App.css'

function App() {
  console.log("render 0");
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("componentDidMount");
  }, [])

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count])

  console.log("render 1");
  

  return (
    <>
     <h1>{count}</h1>
     <button onClick={handleClick}>incrementer</button>
    </>
  )
}

export default App

/* 
-------- CYCLE DE VIE D'UN COMPONENT REACT --------

PHASE 1 : MONTAGE (MOUNTING)
lecture1 : render
lecture2 : componentDidMount (useEffect [])


PHASE 2 : MISE A JOUR (UPDATING)
lecture1 : render (re-render)
lecture2 : componentDidUpdate (useEffect [dependencies])


PHASE 3 : DEMONTAGE (UNMOUNTING)
lecture1 : ❌ (dead)
lecture2 : componentWillUnmount (return useEffect)



*/
