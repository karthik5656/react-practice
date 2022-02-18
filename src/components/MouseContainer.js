import React, { useState } from 'react'
import UseStateThree from './UseStateThree';
import '../styles/counter.css'


//for removing any event handler
function MouseContainer() {
    const[display, setDisplay] = useState(true);
  return (
    <div className='counter'>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <UseStateThree/>}
    </div>
  )
}

export default MouseContainer