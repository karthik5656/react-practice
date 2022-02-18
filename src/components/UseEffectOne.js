import React, { useEffect, useState } from 'react'
import '../styles/counter.css'
function UseEffectOne() {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        document.title = `You Clicked ${count} times`
    })
    return(
    <div className='counter'>
        <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  )
}
 
export default UseEffectOne