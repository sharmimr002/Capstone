import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logo-color.png';
import { useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  const handleHomeClick=()=>{
    console.log("TESTING HOME CLICK");
    navigate('/');
  }
  return (
    <div>
      <header className='header'>
        <div className={'headofLayout'}>
            <img src={logo} style={{'width':'300px', 'height':'250px'}} onClick={handleHomeClick} className='furnifixLogo'/>
        
        
        <nav className='navBar'>
          <ul>
            {/* <li><a href="/">Home</a></li> */}
            {/* <li><a href="/login">Login</a></li> */}
            <li><a href="/createUser">Create User</a></li>
            <li><a href="/createTicket">Create Ticket</a></li>
          </ul>
        </nav></div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;