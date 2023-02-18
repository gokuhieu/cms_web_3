

import {Link}from 'react-router-dom'
import {useState,useEffect,useRef } from 'react'
import {io} from 'socket.io-client'
import axios from 'axios'

function Login() {

  const socketRef = useRef();
  let [username,setusername] = useState('')
  let [password,setpassword] = useState('')
       let submit_handle=(e)=> {
        axios.post('/authentication',{username:username,password:password})
      }
  useEffect(()=>{
    socketRef.current =io.connect('http://localhost:3000')
    socketRef.current.on('authentication',(args)=>{
      console.log(args)
    })
  },[])
  return (
    <div className='login-page'>
      <div className="login">
          <div className='input'>
            <label className='label-input' >User Name</label>
            <input type='text' onChange={(e)=>{setusername(e.target.value)}} value={username}></input>
          </div>
          <div className='input'>
            <label className='label-input'  >Password</label>
            <input type='password' onChange={(e)=>{setpassword(e.target.value)}} value={password}></input>
          </div>
          <div className='btn-submit-wrap'>
              <button onClick={submit_handle} type='submit' className='submit-login'>Login</button>
          </div>
          
      </div>
    </div>
  );
}

export default Login;
