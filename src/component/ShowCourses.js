import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ShowCourses() {
    const [myCourse, setMyCourse] = useState([]);
    const courses = [{
        "id": "1",
        "courseName": "ANC",
        "courseCode": "2",
        "courseDescription": "This is a description here",
        "credits": "4",
        "capacity": "23"
    }, {
        "id": "2",
        "courseName": "ANC",
        "courseCode": "2",
        "courseDescription": "This is a description here",
        "credits": "4",
        "capacity": "23"
    },
    {
        "id": "3",
        "courseName": "ANC",
        "courseCode": "2",
        "courseDescription": "This is a description here",
        "credits": "4",
        "capacity": "23"
    }
    ]


    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get("http://localhost:8080/esd-1.0-SNAPSHOT/api/course/getCourse");
                const data = await response.data;
                setMyCourse(data);
            }
            fetchData();
        } catch (e) {
            console.log(e);
        }

    });
    return (
        <div className='container'>
            <div className='row'>
                {
                    myCourse?.map(course =>
                        <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>{course.courseCode}</div>
                                    <div className='card-text'>{course.courseName}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
