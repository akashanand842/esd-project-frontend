import axios from 'axios';
import React, { useState } from 'react'
import './Common.css'

export default function AddCourse() {
    const [courseCode,setCourseCode] = useState("");
    const [credits,setCredits] = useState("");
    const [capacity,setCapacity] = useState("");

    const sendMessage = async() => {
        try{
            
            console.log(courseCode);

            const response = await axios.put("http://localhost:8080/esd-1.0-SNAPSHOT/api/course/updateCourse",
            {
                "courseCode": courseCode,
                "credits" : credits,
                "capacity": capacity
            });
            
            console.log(response.status);

            if(response.status != 200){
                alert("Error");
                window.location.reload();
            }
            alert("Update Success");
            window.location.replace("/home");
            

        }catch(e){
            console.log(e);
    }
        
    }

  return (
    <div className='container my-color'>
        <center>
            <h3>Update Course</h3>
        </center>
        <div className='form-group space-in-input'>
            <input 
                className='form-control' 
                type={"text"} 
                name="courseCode" 
                placeholder='courseCode'
                onChange={(e)=>setCourseCode(e.target.value)} 
            />
        </div>
        {/* <div className='form-group space-in-input'>
            <input 
                className='form-control' 
                type={"text"} 
                name="courseName" 
                placeholder='courseName' 
                onChange={(e)=>setCourseName(e.target.value)}
            />
        </div> */}
        {/* <div className='form-group space-in-input'>
            <input 
                className='form-control' 
                type={"text"} 
                name="courseDescription" 
                placeholder='courseDescription'
                onChange={(e)=>setCourseDescription(e.target.value)} 
            />
        </div> */}
        <div className='form-group space-in-input'>
            <input 
                className='form-control' 
                type={"text"} 
                name="Credits" 
                placeholder='Credits' 
                onChange={(e)=>setCredits(e.target.value)}
            />
        </div>
        <div className='form-group space-in-input'>
            <input
                 className='form-control' 
                 type={"text"} 
                 name="Capacity" 
                 placeholder='Capacity' 
                 onChange={(e)=>setCapacity(e.target.value)}
            />
        </div>
        <div className='form-group space-in-input'>
            <button
                 className='btn btn-primary'
                 onClick={()=>sendMessage()}
            >Update Course</button>
        </div>
    </div>
  )
}
