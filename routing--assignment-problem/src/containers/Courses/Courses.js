import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Course from '../Course/Course'

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        console.log("this.props===>",this.props);
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link 
                                to={{
                                    pathname:this.props.match.url+"/:"+course.id,
                                    search:"?title="+course.title
                                }}
                                 key={course.id} >
                                      <article className="Course">{course.title}</article>
                                </Link>
                          );
                        } )
                    }
                </section>
                <Route 
                path={this.props.match.url+'/:id'} exact component={Course}/>
            </div>
        );
    }
}

export default Courses;