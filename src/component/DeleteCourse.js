import axios from 'axios'
import React, { useState } from 'react'
import {useEffect} from 'react';
import './Common.css'





export default function DeleteCourse() {
    const [data, setData] = useState([]);
    
    const deleteCourse = async() => {
        try{
            console.log(data);
            const response = await axios.post("http://localhost:8080/esd-1.0-SNAPSHOT/api/course/deleteCourse", {"courseCode" : data});
            console.log(response.status);
            if(response.status == 200){
                alert("Course Successfully Deleted\nPlease click Ok");
                window.location.replace("/home");
                
            }
            
            alert("Not Existing CourseCode\nPlease click Ok");
            window.location.reload();

        }catch(e){
            console.log(e);
        }
    }
  return (
    <div className='container'>
        <div className='form-group space-in-input'>
            <input className='form-control' type={"text"} name="courseCode" placeholder='courseCode' onChange={(e) => setData(e.target.value)}/>
        </div>
        <div className='form-group space-in-input'>
            <button className='btn btn-small btn-primary' onClick={()=>deleteCourse()}>Delete Course</button>
        </div>
    </div>
  )
}
