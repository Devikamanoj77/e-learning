import React from 'react'



const Profile = () => {
  return (
    <>
      <div className="w-50 container shadow border" >
        <div className='p-2 d-flex'>
          <img width={'150px'} height={'100px'} className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
            <div className='d-flex flex-column justify-content-center align-items-center ms-4'>
              <h3 style={{color:'grey'}}>Name :</h3>
              <h3 style={{color:'grey'}}>Email  :</h3>
            </div>
              
         
        </div>
      </div>
     
    </>
    
  )
}

export default Profile