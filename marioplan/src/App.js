import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/projectDetails';
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import CreateProject from './components/projects/createProjects';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Navbar/>
         <Switch>
           <Route exact path='/' component={Dashboard}/>
           <Route path='/project/:id' component={ProjectDetails}/>
           <Route path='/signin' component={SignIn}/>
           <Route path='/signup' component={SignUp}/>
           <Route path='/create' component={CreateProject}/>
         </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
