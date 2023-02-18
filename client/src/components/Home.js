

import {Link}from 'react-router-dom'
import {useState,useEffect} from 'react'
import { AiOutlineLike  } from 'react-icons/ai';

function Home() {
  let [showview,setshowview] = useState(false)
  let [showcomment,setshowcomment] = useState(false)
  useEffect(()=>{
    

  },[showview])
  return (
    <div className='home-page'>
       <div className='home-img'>
        
            <img src={"./cms.png"}/>
            
        </div>     


    </div>
  );
}

export default Home;
