import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Message from './components/Message';
import Counter from './components/Counter';
import HookCounterexample from './components/HookCounterexample';
import HookCounterTwo from './components/HookCounterTwo';
import UseEffectOne from './components/UseEffectOne';
import UseEffectTwo from './components/UseEffectTwo';
import UseStateThree from './components/UseStateThree';
import MouseContainer from './components/MouseContainer';
import IntervalTimerCount from './components/IntervalTimerCount';



class App extends Component{
  render(){
    return(
      <div className='App'>
        {/*<Greet name="Karthik" age="20" >
          <p>This is children props</p>
        </Greet>
        <Greet name="KlaUs" age="2000" >
          <button>Heyy</button>
        </Greet>
    <Hello/>*/}
    <Message></Message>
    <br></br>
    <Counter></Counter>
    <HookCounterexample/>
    <HookCounterTwo/>
    <UseEffectOne/>
    <UseEffectTwo/>
    <MouseContainer/>
    <IntervalTimerCount/>
      </div>
    );
  }
}

export default App;
