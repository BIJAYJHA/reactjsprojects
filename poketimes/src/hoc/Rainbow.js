import React from 'react';

const Rainbow=(WrappedComponent)=>{

    const colours=['red','pink','yellow','orange','blue','green'];
    const RandomColour=colours[Math.floor(Math.random()*5)];

    const className=RandomColour+'-text';
    return(props)=>{
        return(
            <div className={className}>
                <WrappedComponent{...props}/>
            </div>
        )
    }

}
export default Rainbow