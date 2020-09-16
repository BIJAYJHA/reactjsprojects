import React, {Component} from 'react';
import { connect } from 'net';

class AppTodo extends Component{

    state={
      content:''  
    }
    
    handleChange=(e)=>{
        this.setState({
            content:e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            content: ''
    })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        );
    }

}

export default AppTodo;