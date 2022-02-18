import React, { useState } from 'react'
import '../styles/counter.css'


function Counter(props) {
    const initialCount = 0;
    const [count, setCount] = useState(0);
    const decrementFunc = () =>{
        setCount(count - 1, 0);
        console.log(prevCount => prevCount - 1);
    }
    const incrementFunc = () =>{
        setCount(count + 1, 0);
        console.log(prevCount => prevCount + 1);
    }
    const incrementFive = () =>{
      for(let i=0;i<5;i++){
        setCount(prevCount => prevCount + 1)
        console.log(prevCount => prevCount + 1);
      }
    }
  return (
    
    <div className='counter'>
      <div className='first-line'>
      <button onClick={decrementFunc}>-</button>
        <h3>{count}</h3>
        <button onClick={incrementFunc}>+</button>
      </div>
      <div className='second-line'>
      <button onClick={() => setCount(initialCount)} >reset value</button>
        <button onClick={incrementFive}>Inc 5</button>
      </div>
    </div>
  )
}

export default Counter