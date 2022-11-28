import React from 'react'

export default function ShowCourses() {
    const courses = [{
        "id":"1",
        "courseName":"ANC",
        "courseCode":"2",
        "courseDescription":"This is a description here",
        "credits":"4",
        "capacity":"23"
    },{
        "id":"2",
        "courseName":"ANC",
        "courseCode":"2",
        "courseDescription":"This is a description here",
        "credits":"4",
        "capacity":"23"
    },
    {
        "id":"3",
        "courseName":"ANC",
        "courseCode":"2",
        "courseDescription":"This is a description here",
        "credits":"4",
        "capacity":"23"
    }
]
  return (
    <div className='container'>
        <div className='row'>
            {courses.map(course => <div className='col-md-4'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='card-title'>{course.courseName}</div>
                        <div className='card-text'>{course.courseDescription}</div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}
