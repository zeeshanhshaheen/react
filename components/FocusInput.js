import React, { Component } from 'react'
import Input from './input'
class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
        this.state = {
             
        }
    }
    cliclHandler = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef }/>
                <button onClick={this.cliclHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
