import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>{count}</h1>
    </>
  )
}

export default App

/* 
-------- CYCLE DE VIE D'UN COMPONENT REACT --------

PHASE 1 : MONTAGE (MOUNTING)



PHASE 2 : MISE A JOUR (UPDATING)



PHASE 3 : DEMONTAGE (UNMOUNTING)




*/
