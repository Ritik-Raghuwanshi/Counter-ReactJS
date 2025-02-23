import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5);
 const addvalue= ()=>{
     counter+=1;
     if(counter<=20){
     setCounter(counter);
     console.log(counter);
     }
 }
 const removevalue= ()=>{
     counter-=1;
     if(counter>=0){
     setCounter(counter);
     console.log(counter);
     }
 }
  return (
    <>
      <h1>First Project</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addvalue}
      >Increase</button>
      <button onClick={removevalue}
      >Decrease</button>
    </>
  )
}

export default App
