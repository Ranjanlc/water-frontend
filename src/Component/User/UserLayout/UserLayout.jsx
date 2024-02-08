import React from 'react'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {
  return (
    <>
    <div className="container-fluid mt-5" 
    // style={{
    //       minHeight: '400px',
    //       paddingRight: "0",
    //       paddingLeft: "2.5rem"
          
    //     }}
        >
              <Outlet />
            </div>
    </>
  )
}

export default UserLayout