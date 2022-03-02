import React from 'react';
import {BiMapPin} from 'react-icons/bi'
import '../styles/counter.css'
import {AiFillGithub} from 'react-icons/ai'
import {IconContext} from 'react-icons'


function ReactIcons() {
  return (
    <IconContext.Provider value={{color:'blue',size:'5rem'}} >
      <div className='counter'>
          <BiMapPin color='purple' size='5rem'/>
          <AiFillGithub/>
      </div>
    </IconContext.Provider>
  )
}

export default ReactIcons