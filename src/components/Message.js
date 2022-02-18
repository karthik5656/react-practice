import React, { useState } from 'react'

function Message() {
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome visitor');
    const [buttonText, setButtonText] = useState('Subscribe');
    const [isToggleSubscribed, setIsToggleSubscribed] = useState(true);
    const changeMessage = () =>{
        if(isToggleSubscribed){
            console.log(welcomeMessage)
            setWelcomeMessage('Thank You Subscriber!');
            setButtonText('Subscribed');
            setIsToggleSubscribed(false);
        }else{
            console.log(welcomeMessage)
            setWelcomeMessage('Welcome visitor');
            setButtonText('Subscribe');
            setIsToggleSubscribed(true)
        }
        }
  return (
    <div>
        <h1>{welcomeMessage}</h1>
        <button onClick={changeMessage}>{buttonText}</button>
    </div>
  )
}

export default Message