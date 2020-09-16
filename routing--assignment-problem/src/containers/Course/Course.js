import React, { Component } from 'react';

class Course extends Component {

state={
    title:null
}
    loadData(){
        console.log("Course.js props===>",this.props);
        const query=new 
        URLSearchParams(this.props.location.search);
      let title;
        for(let params of query.entries()){
            console.log("params=====>",params);
            title=params[1];
        }
        if(this.state.title!==title){
            this.setState({title:title})
        }
       
    }
   componentDidMount(){
       this.loadData();
   }
    componentDidUpdate(){
     this.loadData();
    }

    render () {
       console.log("Course.js props===>",this.props)
        return (
            <div onClick={this.props.clicked}>
                <h1>{this.state.title}</h1>
        <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;