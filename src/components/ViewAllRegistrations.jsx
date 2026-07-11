import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import NavigationBar from './NavigationBar'
const ViewAllRegistrations = () => {
const [data,changeData]=useState([])
const fetchData =  () =>{
    axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
          (Response) => {
            changeData(Response.data)
          }
    ).catch()
}
useEffect(
    () => {
         fetchData()
     },[]
)
  return (
    <div>
    <div>

          <h1><center>View All Registrations</center></h1>
          <div className="container">
              <div className="row">
               <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <div className="row">
                    {data.map(
                       (value,index) => {
                             return(
                                 <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                     <div className="card"> 
                                         <div className="card-body">
                                         <h5 className="card-title">Campus Placements</h5>
                                         <p className="card-text">
                                            <strong>Registration Number:</strong>{value.regNo}<br />
                                             <strong>Full Name:</strong>{value.fullName}<br />
                                             <strong>Branch:</strong> {value.branch} <br />
                                             <strong>SSLC Mark:</strong> {value.sslcMark} <br />
                                             <strong>Plus Two Mark:</strong>{value.plusTwoMark}<br />
                                             <strong>UG Mark:</strong>{value.ugMark} <br />
                                             <strong>PG Mark:</strong> {value.pgMark}<br /></p>
                                         <button className="btn btn-primary">View Details</button>
                                      </div>
                                     </div>
                                     </div>
                             )}
                         )
                     }
               </div>
             </div>
          </div>
     </div>
     </div>
    </div>
  )
}

export default ViewAllRegistrations