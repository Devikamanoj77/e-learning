import React, { useState } from 'react'
import { Form, FloatingLabel,Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'



const Auth = ({insideRegister}) => {
  const navigate = useNavigate()
  const [isLogin,setIsLogin] = useState(false)
  const [userInput,setUserInput] = useState({
    username:"",email:"",password:""
  })
  console.log(userInput);

  const register = async(e)=>{
    e.preventDefault()
    if(userInput.username && userInput.email && userInput.password){
      // api all
      try{
        const result = await registerAPI(userInput)
        if(result.status==200){
          alert("Registered")
          navigate('/login')
          setUserInput({username:"",email:"",password:""})
        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setUserInput({username:"",email:"",password:""})
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form Completely!!!")
    }
  }

  const login = async (e) => {
    e.preventDefault();
  
    if (userInput.email && userInput.password) {
      try {
        const result = await loginAPI(userInput);
  
        if (result.status === 200) {
          // Save user and token in session storage
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setIsLogin(true);
  
          // Parse user role correctly
          const user = JSON.parse(sessionStorage.getItem("user"));
          
          setTimeout(() => {
            if (user.role === "admin") {
              navigate("/admindashboard");
            } else {
              navigate("/");
            }
            // Reset inputs and login state for non-admin users
            setUserInput({ username: "", email: "", password: "" });
            setIsLogin(false);
          }, 2000);
        } else {
          // Handle server response status
          if (result.response?.status === 404) {
            alert(result.response.data);
          } else {
            alert("Unexpected response from the server.");
          }
        }
      } catch (err) {
        console.error("Login error:", err); // Log errors for debugging
        alert("An error occurred during login. Please try again.");
      }
    } else {
      alert("Fill completely");
    }
  };
  
  
  return (
    <>
      <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-info'>
        <div className='container w-75 '>
          <div className='card shadow p-2 rounded'>
              <div className="row align-items-center">
                
                <div className="col-lg-6">
                    <img src='https://krishnecs.in/wp-content/uploads/2023/09/login-animate-2.gif'  alt="" className='img-fluid'/>
                </div>
                <div className="col-lg-6"> 
                <h1 className='my-2 text-info'><i class="fa-solid fa-book me-3"></i>
                eLearning</h1>
                  <h5>Sign {insideRegister?'Up':'In'} to your Account</h5>
                  <Form>
                {
                  insideRegister && 
                <FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3">
                  <Form.Control onChange={e=>setUserInput({...userInput,username:e.target.value})}  type="text" placeholder="Username" />
                </FloatingLabel>
                }
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control onChange={e=>setUserInput({...userInput,email:e.target.value})}  type="email" placeholder="Email address" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control onChange={e=>setUserInput({...userInput,password:e.target.value})}  type="password" placeholder="Password" />
                </FloatingLabel>

                {
                  insideRegister ?
                  <div className="mt-3">
                    <button onClick={register} className="btn btn-info mb-2 rounded">Register</button>
                    <p>Existing User? Please Click here to <Link to={'/login'}>Login</Link> </p>
                  </div>
                  :
                  <div  className="mt-3">
                    <button onClick={login} className="btn btn-info rounded mb-2 d-flex align-items-center">Login
                     {
                      isLogin && <Spinner animation="border" variant="light" className='ms-2' />
                     }
                    </button>
                    <p>New User? Please Click here to <Link to={'/register'}>Register</Link> </p>
                  </div>
                }
              </Form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth