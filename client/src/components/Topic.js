

import {Link}from 'react-router-dom'
import {useState,useEffect} from 'react'
function Login() {
  let [username,setusername] = useState('')
  let [password,setpassword] = useState('')
       let submit_handle=(e)=> {
        
      }
  useEffect(()=>{

  },[])
  return (
    <div className='topic-page'>
      <div className="topic">
          <div className='topic-info'>
          <p>Name Topic</p>
          <p>Name</p>
          </div>
          <div className='topic-deadline'>
          <p>Date - Final Date</p>
          </div>
      </div>
    </div>
  );
}

export default Login;
