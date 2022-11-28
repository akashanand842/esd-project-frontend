import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({course, onDelete}) => {
  return (
    <div className='container'>
       <div className="row">
          <div className="col-md-3" style={{marginTop:"20px"}}>
              <h1>Courses</h1>
              <h1>Add</h1>
              <h1>Update</h1>
              <h1>Delete</h1>
          </div>
          <div className="col-md-9"></div>
       </div>
    </div>
  )
}

export default Course
