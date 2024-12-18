import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isAuthorised,setIsAuthorised] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsAuthorised(true)
    }else{
      setIsAuthorised(false)
    }
  },[])
  
  return (
    <Navbar
      className="position-fixed w-100 shadow-sm bg-info"
      style={{ zIndex: 1 }}
    >
      <Container>
        <Navbar.Brand href="#"  >
        <Link to={'/'} style={{fontSize:'30px',fontWeight:'600'}} className='text-decoration-none text-light'><i class="fa-solid fa-book me-2 mt-1"></i>
      InSighto</Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/" className="text-light">
            HOME
          </Nav.Link>
          <Nav.Link href="/courses" className="text-light ms-4">
            COURSES
          </Nav.Link>
          {
            isAuthorised?
            <Nav.Link href='/dashboard' className="text-light ms-4">
            ACCOUNT
            </Nav.Link>
          :
          <Nav.Link href='/login' className="text-light ms-4">
          LOGIN
          </Nav.Link>
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
