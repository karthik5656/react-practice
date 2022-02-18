import React, { useEffect, useState } from 'react'
import '../styles/counter.css'


function IntervalTimerCount() {
    const [count, setCount] = useState(0);
    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() =>{
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count])

  return (
    <div className='counter'>
        {count<5? <p>{count}</p>:<p>count expired</p>}
    </div>
  )
}

export default IntervalTimerCount