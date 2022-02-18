import React, { useState } from 'react'
import '../styles/counter.css'

function HookCounterexample() {
    const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div className='counter'>
        <form>
            <input type="text"
            value={name.firstName}
            onChange={e => setName({...name ,firstName: e.target.value})}
            placeholder='type your first name here'

            /><br/>
            <input type='text'
            value={name.lastName}
            placeholder='type your last name here'
            onChange = {e => setName({...name, lastName: e.target.value})}
            />
            <h2>user's first name is {name.firstName} </h2>
            <h2>user's last name is {name.lastName} </h2>
            <h2> {JSON.stringify(name)} </h2>
        </form>
    </div>
  )
}

export default HookCounterexample