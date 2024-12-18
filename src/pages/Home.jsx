import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import bookImg from "../assets/top-view-hands-with-books.jpg";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])
  return (
    <>
      <Header />
      <div style={{
          minHeight: "100vh",
          paddingTop: "100px",
          
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }} className="shadow border">
          <div className="row">
            <div className="col-lg-6">
            <div className="container ms-5">
              <div style={{ textAlign: "justify", marginTop: "200px" }} >
                <h5 className="fw-bold " style={{color:'grey'}}>BEST ONLINE COURSES</h5>
                <h1 className="text-info" style={{fontSize:'50px',fontWeight:'700'}}>
                  GET Educated Online From <br /> Your Home
                </h1>
                <h6 className="fw-bolder " style={{color:'grey'}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                  voluptates ipsa praesentium saepe. uifehvowi 
                  ghowghoaehgyhifahgpiaqehgp
                </h6>
                {isLogin ? (
                  <Link to={"/dashboard"} className="btn btn-info mt-2">
                    MANAGE YOUR COURSES
                  </Link>
                ) : (
                  <Link to={"/login"} className="btn btn-info p-3">
                    STARTS TO EXPLORE
                  </Link>
                )}
              </div>
            </div>
            </div> 
            
            <div className="col-lg-6">
              <img className="img-fluid" style={{marginLeft:'50px',marginTop:'90px'}} src={'https://miro.medium.com/v2/resize:fit:1000/1*XnX-AvRxI2kKGNWiePGbNA.gif'} alt="" />
            </div>
          </div>
      </div>
      {/* <div 
        style={{
          minHeight: "100vh",
          paddingTop: "100px",
          backgroundColor:'grey',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "justify", marginTop: "200px" }} >
            <h5 className="fw-bold text-info">BEST ONLINE COURSES</h5>
            <h1 className="text-light" style={{fontSize:'60px',fontWeight:'1000px'}}>
              GET Educated Online From <br /> Your Home
            </h1>
            <h6 className="fw-bolder text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              voluptates ipsa praesentium saepe. uifehvowi <br />
              ghowghoaehgyhifahgpiaqehgp
            </h6>
            {isLogin ? (
              <Link to={"/dashboard"} className="btn btn-info">
                MANAGE YOUR EXPLORE
              </Link>
            ) : (
              <Link to={"/login"} className="btn btn-info p-3">
                STARTS TO EXPLORE
              </Link>
            )}
          </div>
        </div>
      </div> */}

<div className="d-flex justify-content-center align-items-center my-5 flex-column pb-5 rounded" style={{backgroundColor:''}}>
  <div className="d-flex justify-content-evenly align-items-center mt-5 w-100">
    <Card
      className="card-hover shadow"
      style={{
        width: "18rem",
        border: "none", // Remove border
         // Remove shadow
      }}
    >
      <Card.Body>
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
        <i className="fa-solid fa-globe  "  style={{ fontSize: "50px" }}></i>
            <h6 className="mt-3">Online Classes</h6>
          <p style={{ textAlign: "justify" }}>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card
      className="card-hover shadow"
      style={{
        width: "18rem",
        border: "none", // Remove border
        boxShadow: "none", // Remove shadow
      }}
    >
      <Card.Body>
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
        <i class="fa-solid fa-house" style={{ fontSize: "50px" }}></i>
          <h6 className="mt-3">Online Classes</h6>
          <p style={{ textAlign: "justify" }}>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card
      className="card-hover shadow"
      style={{
        width: "18rem",
        border: "none", // Remove border
        boxShadow: "none", // Remove shadow
      }}
    >
      <Card.Body>
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
          <i
            className="fa-solid fa-graduation-cap "
            style={{ fontSize: "50px" }}
          ></i>
          <h6 className="mt-3">Skilled Instructors</h6>
          <p style={{ textAlign: "justify" }}>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card
      className="card-hover shadow"
      style={{
        width: "18rem",
        border: "none", // Remove border
        boxShadow: "none", // Remove shadow
      }}
    >
      <Card.Body>
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
        <i class="fa-solid fa-book-open" style={{ fontSize: "50px" }}></i>
        <h6 className="mt-3">Book Library</h6>
          <p style={{ textAlign: "justify" }}>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>



      {/* About section */}

      <div style={{ paddingTop: "100px" }} className="row shadow py-5">
        <div className="col-lg-6 text-center">
          <img className="img-fluid h-100 w-75" src={bookImg} alt="" />
        </div>
        <div className="col-lg-6" style={{ textAlign: "justify" }}>
          <div className="d-flex">
            <i class="fa-solid fa-minus"></i><h6 className="text-info">ABOUT US</h6><i class="fa-solid fa-minus"></i>
          </div>
          <h2
            style={{
              fontFamily: "Rubik, sans-serif",
              fontSize: "50px",
              fontWeight: "bolder",
            }}
            className="fw-bolder text-info"
          >
            Welcome to eLearning
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aut
            alias totam reiciendis aliquid vero <br /> adipisci laudantium quia qui at
            ipsam error, eveniet similique aperiam sequi iste, rem fuga nihil!
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aut
            alias totam reiciendis aliquid vero <br /> adipisci laudantium quia qui at
            ipsam error, eveniet similique aperiam sequi iste, rem fuga nihil!
          </p>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <div>
                <i class="fa-solid fa-arrow-right mt-4 text-info"></i> Skilled Instructors
                </div>
                <div>
                <i class="fa-solid fa-arrow-right mt-3 text-info"></i> International Certificate
                </div>
                <div>
                <i class="fa-solid fa-arrow-right mt-3 text-info"></i> Online Classes
                </div>
              </div>
              <div>
                <div className="d-flex flex-column ms-5">
                    <div>
                    <i class="fa-solid fa-arrow-right mt-4 text-info"></i> Skilled Instructors
                    </div>
                    <div>
                    <i class="fa-solid fa-arrow-right mt-4 text-info"></i> Skilled Instructors
                    </div>
                </div>
              </div>
            </div>
          <Link to={"/"} className="btn btn-info rounded p-2 px-4 mt-3">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
