import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/datafetching.css'

function DataFetching() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos',{
            params:{
                _limit:10
            }
        })
        .then(response => {
            console.log(response);
            setTodos(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <div className='data-fetching'>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}><b>Task ?</b> {todo.title}<br/> <b>status</b> : {todo.completed? 'completed':'not completed'} </li>
            ))}
        </ul>
    </div>
  )
}

export default DataFetching