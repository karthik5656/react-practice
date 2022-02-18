import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    /*
    clickHandler(){
        this.setState({
            message : 'Click Event Handled'
        })
    }*/

    clickHandler = () => {
        this.setState({
            message : 'Click Event Handled'
        })
    }

    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick={this.clickHandler} >Another Click</button>
                {/*<button onClick={ () => this.clickHandler() } >Another Click</button>*/}
            </div>
        )
    }
}

export default EventBind
