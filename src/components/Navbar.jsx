import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';


function Navbar() {
    
    const{ city, temp} = useContext(GlobalContext)
    
    
    
  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav d-sm-none d-md-flex d-lg-flex flex-row">
              <li className="nav-item mx-3">
                <Link className="nav-link active text-white" to={"/business"}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to={"/entertainment"}>Entertainment</Link>
              </li>
              <li className="nav-item mx-3">
              <Link className="nav-link active text-white" to={"/sports"}>Sports</Link>
              </li>
              
            </ul>
            <div className="d-flex justify-content-end">
               <h4> {city}, {temp}°C</h4>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar