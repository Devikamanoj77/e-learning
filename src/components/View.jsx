import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { Card, Col, Row } from 'react-bootstrap'
import { allCourseAPI } from '../services/allAPI'
import SERVER_BASE_URL from '../services/serverURL'
import { addCourseContext } from '../contexts/ContextShare'


const View = () => {
  const {addCourseResponse,setAddCourseResponse} = useContext(addCourseContext)
  // create state to store courses
  const [allCourses, setAllCourses] = useState([]);
  console.log(allCourses);
  
  // call all courses getting function using useeffect
  useEffect(() => {
    getallCourses();
  }, [addCourseResponse]);
  
  // create function for getting all courses and call api
  const getallCourses = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      };
      try {
        const result = await allCourseAPI(reqHeader);
        console.log(result);
        if (result.status === 200) {
          setAllCourses(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ color: 'grey' }}>Watch the enrolled Courses</h3>
        <Row>
          <Col className="mb-3 p-3" sm={12} md={6} lg={4}>
            <Add />
          </Col>
        </Row>
      </div>

      <Row>
        {
          allCourses.length > 0 ? 
            allCourses?.map(course => (
              <Col key={course?._id} className='mb-3' sm={12} md={6} lg={4}>
                <Card 
                  onClick={() => window.open(course?.youtubeLink, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Img
                    height={"200px"}
                    variant="top"
                    src={`${SERVER_BASE_URL}/uploads/${course?.courseImage}`}
                  />
                  <Card.Body>
                    <div style={{ textAlign: 'justify' }}>
                      <Card.Title className="text-dark fw-bolder">{course?.title}</Card.Title>
                      <h5 className="text-dark mt-3">
                        By <span className="text-info">{course?.author}</span>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <Edit />
                        <button className="btn btn-info">Delete</button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : <div>No courses uploaded yet!!!!</div>
        }
      </Row>
    </>
  );
};

export default View;
