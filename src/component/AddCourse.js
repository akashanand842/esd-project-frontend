import React from 'react'
import './Common.css'

export default function AddCourse() {
  return (
    <div className='container'>
        <center>
            <h3>Add a Course</h3>
        </center>
        <div className='form-group space-in-input'>
            <input className='form-control' type={"text"} name="courseCode" placeholder='courseCode' />
        </div>
        <div className='form-group space-in-input'>
            <input className='form-control' type={"text"} name="courseName" placeholder='courseName' />
        </div>
        <div className='form-group space-in-input'>
            <input className='form-control' type={"text"} name="courseDescription" placeholder='courseDescription' />
        </div>
        <div className='form-group space-in-input'>
            <input className='form-control' type={"text"} name="Credits" placeholder='Credits' />
        </div>
        <div className='form-group space-in-input'>
            <input className='form-control' type={"text"} name="Capacity" placeholder='Capacity' />
        </div>
        <div className='form-group space-in-input'>
            <button className='btn btn-primary'>Add Course</button>
        </div>
    </div>
  )
}
