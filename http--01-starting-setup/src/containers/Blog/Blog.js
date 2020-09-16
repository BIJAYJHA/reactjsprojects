import React, { Component } from 'react';
//import axios from 'axios'

import axios from '../../axios';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from '../FullPost/FullPost';
// import NewPost from '../NewPost/NewPost';
import Posts from '../Posts/Posts'
//import NewPost from '../NewPost/NewPost';
import AsynComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost= AsynComponent(()=>{
    return import('../NewPost/NewPost');
});

class Blog extends Component {

    state={
        auth:true
    }
  
  
  
    render () {
        
        
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts" 
                            exact
                            activeClassName="my-active"
                            activeStyle={
                                {
                                    color:'#fa923f',
                                    textDecoration:'underline'
                                }
                            }>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash:"#submit",
                                search:"?quicks-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/* <Route path="/" exact render={()=><h1>Home</h1>}/>
               <Route path="/"  render={()=><h1>Home2</h1>}/> */}
             
              
               <Switch>
             
              {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null } 
               <Route path="/posts"  component={Posts}/>
               <Route render={()=><h1>Not Found</h1>}/>
               {/* <Redirect from ="/" to="/posts" /> */}
               {/* <Route path="/"  component={Posts}/> */}
               </Switch>           
               
            </div>
        );
    }
}

export default Blog;