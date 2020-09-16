import React from 'react'
import RainBow from '../hoc/Rainbow'

const About=()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum</p>
        </div>
    )
}

export default RainBow(About)