import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
const Dashboard = () => {
  const [username,setUserName] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUserName(user.username.split(" ")[0]);
    }
  },[]);

  return (
    
    <>
      <Header />
      <div style={{paddingTop:'150px'}} >
        <Profile/>
        <div className='mt-5 ms-5'>
        <h1 style={{color:'grey'}}>Welcome <span className="text-info" style={{fontWeight:'500'}}>{username} ,</span> </h1>
          
        </div>
      </div>
    </>
  )
}

export default Dashboard