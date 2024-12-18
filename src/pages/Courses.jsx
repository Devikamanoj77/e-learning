import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

import { Row,Col } from 'react-bootstrap'
import CourseCard from '../components/CourseCard'
import { allCourseAPI, allUserCourseAPI } from '../services/allAPI'


const Projects = () => {

  const [allUserCourses,setAllUserCourses] = useState([])
  console.log(allUserCourses);
  

  useEffect(()=>{
    getAllUserCourses()
  },[])

  const getAllUserCourses = async()=>{
    try{
      const result = await allUserCourseAPI()
      console.log(result);
      if(result.status==200){
      setAllUserCourses(result.data)
      }
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
      <Header/>
      <div className="container-fluid" style={{paddingTop:'100px'}}>
        <div className="d-flex justify-content-between align-items-center py-5">
          <h1 className='text-info'>All Courses</h1>
          <input  type="text" placeholder='Search Courses' className='form-control w-25 p-2'/>
        </div>
        <Row>
           {
            allUserCourses.length>0 ?
            allUserCourses.map(course=>(
              <Col key={course?._id} className='mb-3' sm={12} md={6} lg={4}>
                <CourseCard displayData={course}/>
              </Col>
              ))
              :
              <div>Courses Not Found!!!</div>
           }
        </Row>
      </div>
    </>
  )
}

export default Projects