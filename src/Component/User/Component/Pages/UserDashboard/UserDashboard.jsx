import React from 'react'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  return (

    <>
   
      <div className='row text-center'>
      <div className='col-md-12 col-sm-12 '>

<Link to="/admin"><button type="button" class="btn btn-outline-info">
        <b>Welcome to Water Supply System</b>
      </button>
       </Link>

       </div>
      </div>
  
    
    </>

  )
}

export default UserDashboard