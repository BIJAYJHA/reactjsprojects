import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {signout} from '../../store/actions/authActions'

const signedInLink=(props)=>{
    return(
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signout}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">
                {props.profile.initials}
                </NavLink></li>
        </ul>
  
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signout:()=>dispatch(signout())
    }
}

export default connect(null,mapDispatchToProps)(signedInLink)