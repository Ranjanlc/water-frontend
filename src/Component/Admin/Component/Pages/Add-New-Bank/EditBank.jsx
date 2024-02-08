import React from 'react'
import './AddNewBank.css'

const EditBank = () => {
  return (

   
    <>
    <main id="main" className="main">
   <section className="section">
     <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
       <h5 className="d-inline">
         <b>Edit Bank</b>
       </h5>
       <hr className="   " style={{
                            background: 'black',
                        }} />
      
         <div className="row ">
           <div className="col-md-6">
             <div className="form-group">
               <label className="form-label">Bank Name </label>
               <input type="text" className="form-control c2" />
             </div>
           </div>
           <div className="col-md-6">
             <div className="form-group">
               <label className="form-label">Account Title </label>
               <input type="text" className="form-control c2" />
             </div>
           </div>
         </div>
         <div className="row ">
           <div className="col-md-6">
             <div className="form-group">
               <label className="form-label"> Account Number </label>
               <input type="text" className="form-control c2" />
             </div>
           </div>
           <div className="col-md-6">
             <div className="form-group">
               <label className="form-label"> Opening Balance </label>
               <input type="text" className="form-control c2" />
             </div>
           </div>
         </div>
         <div className="d-grid gap-2 d-flex justify-content-center mt-3">
           <button className="button" style={{ verticalAlign: "middle" }}>
             <span>Save</span>
           </button>
           {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
         </div>
      
       
     </div>
   </section>
 </main>
 
    </>

  )
}

export default EditBank