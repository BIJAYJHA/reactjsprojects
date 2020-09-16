import React, {Component} from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

class App extends Component {

  render(){
  return (
    <BrowserRouter>  
    <div className="App">
      <Navbar/> 
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/About' component={About}></Route>
      <Route path='/Contact' component={Contact}></Route>
      <Route path='/:post_id' component={Post}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
