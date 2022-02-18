import React, { useState } from 'react'

function HookCounterTwo() {
    const [items, setItems] = useState([]);
    const [acceptInputValue, setAcceptInputValue] = useState(false);
    let textInput = React.createRef;
    const addRandomItem = () => {
        setItems([...items, {
            id:items.length,
            value: Math.floor(Math.random()*10) + 1
        }])
        console.log(items)
    }
    const removeLastItem = () => {
        items.pop()
        setItems([...items])
    }
    const textChangeHandler = (event) =>{
        setItems([...items, {
            id: items.length,
            value: event.target.value
        }])
        setAcceptInputValue(false);
    }
  return (
    <div className='counter'>
        {/*
        <input type='number'
        placeholder='enter a value'
        ref={textInput}
        onChange={textChangeHandler}
        />
        <br/><br/>
        <button onClick={() => setAcceptInputValue(true) }>Add the item in input</button>
  <br/><br/>*/}
        <button onClick={addRandomItem} >Add a Random Number</button>
        <br/><br/>
        <button onClick={removeLastItem}>pop last item</button>
        <br/><br/>
        <span>the list is: </span>
        <ol>
            {
                items.map(item =>(
                    <li key={item.id}>
                        {item.value}
                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default HookCounterTwo