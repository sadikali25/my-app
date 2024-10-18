import React from 'react'
import deshboard from '../Images/dashboard.png'
import leave from '../Images/exit.png'
import Reports from '../Images/report.png'
import Setting from '../Images/setting.png'
import user from '../Images/user.png'
function Deshboard() {
  return (
    <div>
     <h1>Deshborad</h1>
      <div className="container-fulid containe">
        <div className="row">
       
          <div className="col-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <p className=''><img src={deshboard}/>   Deshboard</p>
              </li>
              <li className="nav-item">
              <p className=''><img src={leave}/> Leave</p>
              </li>
              <li className="nav-item">
              <p className=''><img src={Reports} />Reports</p>
              </li>
              <li className="nav-item">
              <p className=''><img src={Setting} />Setting</p>
              </li>
            </ul>
          </div>
          <div className='col-10'> 
           <div className='col-lg-3'>
              <div className='card mt-5'>
                 <p className='text-center'>Total Employee</p>
                 <img src={user}/>
              </div>
           </div>
           <div className='col-lg-3'>

           </div>
           <div className='col-lg-3'>

           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deshboard
