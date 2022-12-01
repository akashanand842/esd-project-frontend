import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from 'react';
import Login from './component/Login'
import HomePage from './component/HomePage';
import Course from './component/Course';
import SideNav from './component/SideNav';
import AddCourse from './component/AddCourse';
import ShowCourses from './component/ShowCourses'
import DeleteCourse from './component/DeleteCourse';
import NavHead from './component/NavHead';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/home">
          <NavHead />
          <div className='container-fluid' style={{ backgroundColor: "#cbd4db", width: "100%", height: "650px" }}>
            <SideNav />
            <HomePage />
          </div>
        </Route>

        {/* //full component */}
        <Route path="/add">
          <NavHead />
          <div className='container-fluid' style={{ backgroundColor: "#cbd4db", width: "100%", height: "650px" }}>
            <div className='row'>
              <div className='col-md-3'>
                <SideNav />
              </div>
              <div className='col-md-9'>
                <AddCourse />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/courses">
          <NavHead />
          <div className='container-fluid' style={{ backgroundColor: "#cbd4db", width: "100%", height: "650px" }}>
            <div className='row'>
              <div className='col-md-3'>
                <SideNav />
              </div>
              <div className='col-md-9'>
                <ShowCourses />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/delete">
          <NavHead />
          <div className='container-fluid' style={{ backgroundColor: "#cbd4db", width: "100%", height: "650px" }}>
            <div className='row'>
              <div className='col-md-3'>
                <SideNav />
              </div>
              <div className='col-md-9'>
                <DeleteCourse />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
