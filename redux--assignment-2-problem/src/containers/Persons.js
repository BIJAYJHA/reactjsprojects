import React, { Component } from 'react';
import {connect} from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

  

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        prs:state.per.persons
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onAddedPerson:(name,age)=>dispatch({type:actionTypes.ADD_PERSON,name:name,age:age}),
        onDeletePerson:(id)=>dispatch({type:actionTypes.DELETE_PERSON,personId:id})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);