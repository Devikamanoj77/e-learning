import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import SERVER_BASE_URL from "../services/serverURL";

const ProjectCard = ({displayData}) => {
  const navigate = useNavigate()
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigateToProject = ()=>{
    // user logined?
    if(sessionStorage.getItem("token")){
      // authorised user then direct
      navigate('/courses')
    }else{
      // not  authorised user then alert to login
      alert('Please login to get full access')
      navigate('/login')
    }
   }

  return (
    <>
      <Card onClick={handleShow} className="btn shadow">
        <Card.Img
          height={"200px"}
          variant="top"
          src={`${SERVER_BASE_URL}/uploads/${displayData?.courseImage}`}
        />
        <Card.Body>
          <div style={{textAlign:'justify'}}>
          <Card.Title className="text-dark fw-bolder">{displayData?.title}</Card.Title>
          <h5 className="text-dark mt-3">By <span className="text-info ">{displayData?.author}</span></h5>
          <div className="d-flex align-items-center">
              <button onClick={handleNavigateToProject} className="btn btn-info" >Enroll now</button>
              <div style={{marginLeft:'200px'}} className="d-flex align-items-center">
                
                <i class="fa-solid fa-star text-warning me-1"></i>
                <i class="fa-solid fa-star text-warning me-1"></i>
                <i class="fa-solid fa-star text-warning me-1"></i>
                <i class="fa-solid fa-star text-warning me-1"></i>
                <i class="fa-solid fa-star text-warning me-1"></i>
              </div>
          </div>
          </div>

        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectCard;
