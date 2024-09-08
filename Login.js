import React, { useState } from 'react'
import './../Style/Style.css'

import email_icon from '../assets/envelope.png'
import pwd_icon from '../assets/eye.png'
import Layout from './Layout';
import axios from 'axios';
function Login () {
  const [email, setEmail] = useState('');
  const [pwd, setpwd] = useState('');
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState({});
  const baseURL = 'http://localhost:8000'

  function getAuthToken() {
  return localStorage.getItem('access_token');
}

const apiRequest = async () => {
  console.log("Test in apiRequest");

  try {
    const response = await axios.get(`${baseURL}/api/protected/`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`, // Ensure the token is retrieved correctly
      },
    });

    console.log(response, "RESPONSE");
    setLoginData(response.data); // Assuming setLoginData updates your UI with the API response
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      // Token is invalid or expired, try refreshing it
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        try {
          const tokenResponse = await axios.post(`${baseURL}/api/token/refresh/`, {
            refresh: refreshToken,
          });

          if (tokenResponse.status === 200) {
            // Store the new access token
            localStorage.setItem('access_token', tokenResponse.data.access);
            
            // Retry the original request with the new token
            return apiRequest();
          } else {
            console.log('Token refresh failed');
            // Handle token refresh failure, e.g., log out the user or redirect to login
          }
        } catch (refreshError) {
          console.log('Token refresh error', refreshError);
          // Handle refresh token error
        }
      } else {
        console.log('No refresh token available');
        // Handle no refresh token scenario
      }
    } else {
      // Handle other errors
      setError(error);
      console.log('Error in API request', error);
    }
  }
};


  const handleSubmit=async (e)=>{
    e.preventDefault(); // Prevent the default form submission behavior
    try {
    const response = await axios.post(`${baseURL}/api/token/`, {
      username:email,
      password:pwd,
    });

    if (response.status === 200) {
      // Store the tokens in localStorage
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      console.log('Login successful, tokens stored');
    } else {
      console.log('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    // Handle login failure (e.g., invalid credentials)
  }
apiRequest();
  }

  return (
    <>
      <Layout/>
      <div className='container'>
<div>
        <div className='title'>Login</div>
      </div>
      <form action="" className='inputs' onSubmit={handleSubmit}>
            <div className='input'>
              <img src={email_icon} alt=''/>
              <input required type='email' name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} />

            </div>
            {/* {errors.email===""?null:<span id='redError'>{errors.email}</span>} */}
            <div className='input'>
              <img src={pwd_icon} alt=''/>
              <input required type='password' name='password' placeholder='Password' onChange={(e)=>setpwd(e.target.value)} value={pwd} />
            </div>
            {/* {errors.password===""?null:<span id='redError'>{errors.password}</span>} */}
      <div className='submit-container'>
        <button type='submit'>Login</button>
      </div>
      </form>
      </div>
      
    </>
  )
}

export default Login