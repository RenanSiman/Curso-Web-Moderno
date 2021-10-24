import React, {Component} from 'react'
import { render } from 'react-dom'

export default class Greeting extends Component{

    state = {
        type: this.props.typo,
        name: this.props.name
    }

    setName(e){
        this.setState({name: e.target.value})
    }
    setType(e){
        this.setState({ type: e.target.value })
    }

    render(){
        const { type, name} = this.state
        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr />
                <input type="text" placeholder="Type..." 
                    value={type} onChange={this.setType}></input>
                <input type="text" placeholder="Name..." 
                    value={name} onChange={this.setName}></input>
            </div>
        )
    }
}