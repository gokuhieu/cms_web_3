

import {Link}from 'react-router-dom'
import {useState,useEffect} from 'react'
import { AiOutlineLike  } from 'react-icons/ai';
import View from'./View'
import Comment from'./Comment'
function Login() {
  let [showview,setshowview] = useState(false)
  let [showcomment,setshowcomment] = useState(false)
  useEffect(()=>{
    

  },[showview])
  return (
    <div className='idea-page'>
        <div className='idea'>
          <div className='top'>
            <p>User Name</p>
            <p className='date'>Date</p>
            <p>Text</p>
          
             <p>FilePath</p>
          </div>
          <div className='bottom'>
            <p className='react'><button class='btn-like'><AiOutlineLike/> Like</button></p>
            <p className=''><button onClick={(e)=>{showcomment?setshowcomment(false):setshowcomment(true)}} class='comment'>comment</button></p>
            <p className=''><button onClick={(e)=>{showview?setshowview(false):setshowview(true)}} class='comment'>View</button></p>
            {showview ?<View/>:""}
            <p className=''> </p>
          </div>
        </div>
       {showcomment ?<Comment/>:""}
    </div>
  );
}

export default Login;
