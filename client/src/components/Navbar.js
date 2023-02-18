

import {Link,Outlet}from 'react-router-dom'
function Navbar() {
  return (
      <>
<div className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item first" ><Link className='Link'>Greenwich FPT </Link></li>
            <div className="second">
                <li className="navbar-item"><Link className='Link'>Home </Link></li>
                <li className="navbar-item"><Link className='Link'>Category </Link></li>
                <li className="navbar-item"><Link className='Link'>Post </Link></li>
                <li className="navbar-item"><Link className='Link'>View</Link></li>
                <li className="navbar-item"><Link to='login' className='Link'>Login </Link></li>
            </div>
        </ul>
    </div>
    <Outlet/>
</>
  );
}

export default Navbar;
