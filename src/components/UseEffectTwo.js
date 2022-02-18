import React, { useEffect, useState } from 'react'
import '../styles/counter.css'

function UseEffectTwo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    
    useEffect(() =>{
        document.title = `You clicked ${count} times`
        console.log(`use Effect - Updating document title`)
    }, [count])

  return (
    <div className='counter'>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <br/><br/>
        <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  )
}

export default UseEffectTwo