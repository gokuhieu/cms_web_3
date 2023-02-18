import { FaHome, FaEye, FaUpload, FaFolder } from "react-icons/fa";

import {Link,Outlet}from 'react-router-dom'
import Footer from './Footer';

function Navbar() {
  return (
      <>
<div className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item first" ><Link className='Link'>Greenwich FPT </Link>
            
            </li>
            <div className="second">
                <li className="navbar-item"><Link className='Link'>Home </Link><FaHome className="icons" /></li>
                <li className="navbar-item"><Link className='Link'>Category </Link><FaFolder className="icons" /></li>
                <li className="navbar-item"><Link className='Link'>Post </Link><FaUpload className="icons"/></li>
                <li className="navbar-item"><Link className='Link'>View</Link><FaEye className="icons"/></li>
                <li className="navbar-item"><Link to='login' className='Link'>Login </Link></li>
            </div>
        </ul>
    </div>
    
    <Footer/>
    <Outlet/>
</>
  );
}

export default Navbar;
