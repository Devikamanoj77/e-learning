import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'

const AdminDashboard = () => {
  return (
    <>
    <Header/>

    <div className='container' style={{paddingTop:'100px'}}>
        <div className='rounded text-center' style={{backgroundColor:'#EEEEEE'}}>
            <h1 className='text-info p-3 ' style={{fontWeight:'600'}}>COURSES</h1>
        </div>
    </div>

    <div className='container border mt-5'>
      <div>
       <View/>
      </div>
    </div>
      
       {/* <div className='container border  shadow'>
          <button className='btn btn-info '>ADD COURSES</button>
          <Row>
            <Col className='mb-3' sm={12} md={6} lg={4}>
              <Add/>
            </Col>
          </Row>
       </div> */}
    </>
  )
}

export default AdminDashboard