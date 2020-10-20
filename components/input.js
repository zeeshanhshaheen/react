import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputref = React.createRef()
    }
    focusInput() {
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputref} />
            </div>
        )
    }
}

export default Input
