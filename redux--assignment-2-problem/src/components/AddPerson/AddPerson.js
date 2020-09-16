import React ,{Component}from 'react';

import './AddPerson.css';

class AddPerson extends Component{
    constructor(props){
        super(props);
    }
    state={
        name:'',
        age:''
    }
    nameChangeHandler=(event)=>{
        this.setState({name:event.target.value})


    }

    ageChangeHandler=(event)=>{
        this.setState({age:event.target.value})
    }
    render(){
        return(
            <div className="AddPerson">
            <input type="text"
             placeholder="name"
             onChange={this.nameChangeHandler}
             value={this.state.name}/>
            <input 
            type="number"
             placeholder="age"
             onChange={this.ageChangeHandler}
             value={this.state.age}/>
             {console.log(this.state)}
            <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
            </div>

        )
    }
   

} 

export default AddPerson;