import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  Link ,
  Redirect} from "react-router-dom";
import { useState } from 'react';  
import Login from './component/Login'
import HomePage from './component/HomePage';
import Course from './component/Course';
import Sidebar from './component/SideNav';
import AddCourse from './component/AddCourse';
import ShowCourses from './component/ShowCourses'


function App() {
  const onDelete = (course) => {
    console.log("I am onDelete todo ", course);
    setCourse(course.filter((e) => {
       return e !== course;
    }));
 }
  const [course, setCourse] = useState([
    {
      course_id: 1,
      course_code: 115,
      name: "Math",
      description: "Mathematics for ML",
      year: 1,
      term: 1,
      credits: 4,
      capacity: 40,
      faculty: "Mr. Prasun"
    },
    {
      course_id: 2,
      course_code: 116,
      name: "ML",
      description: "Machine Learning",
      year: 1,
      term: 1,
      credits: 4,
      capacity: 40,
      faculty: "Mr. Prasun"
    },
    {
      course_id: 3,
      course_code: 117,
      name: "SPE",
      description: "Software Production Engineering",
      year: 1,
      term: 1,
      credits: 4,
      capacity: 40,
      faculty: "Mr. Prasun"
    },
  ]);
  

  return (
    <Router>
      <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/home">
        <Sidebar/>
        <HomePage course = {course} onDelete = {onDelete}/>
      </Route>
      <Route path="/add">
        <div className='container'>
          <div className='row'>
              <div className='col-md-3'>
                    <Sidebar/>
              </div>
              <div className='col-md-9'>
                  <AddCourse />
              </div>
          </div>
        </div>
      </Route>
      <Route path="/courses">
        <div className='container'>
          <div className='row'>
              <div className='col-md-3'>
                    <Sidebar/>
              </div>
              <div className='col-md-9'>
                  <ShowCourses />
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
