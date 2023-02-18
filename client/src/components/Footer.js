

import {Link, Outlet}from 'react-router-dom'
import {useState,useEffect} from 'react'
import { AiOutlineLike  } from 'react-icons/ai';

function Footer() {
  let [showview,setshowview] = useState(false)
  let [showcomment,setshowcomment] = useState(false)
  useEffect(()=>{
    

  },[showview])
  return (

     <>
        <footer className='footer-page'>
        <div className='fotter-list'>
            <h3 className='footer-name'>Son nguyen</h3>
            <ul>
                <li> Hotline: 121212 </li>
                <li> Address: Da Lat </li>
                <li> Email: asadaf@gmail.com </li>
            </ul>
        </div>
        
        <div className='fotter-list'>
            <h3 className='footer-name'>Son nguyen</h3>
            <ul>
                <li> Hotline: 121212 </li>
                <li> Address: Da Lat </li>
                <li> Email: asadaf@gmail.com </li>
            </ul>
        </div>
        <div className='fotter-list'>
            <h3 className='footer-name'>Son nguyen</h3>
            <ul>
                <li> Hotline: 121212 </li>
                <li> Address: Da Lat </li>
                <li> Email: asadaf@gmail.com </li>
            </ul>
        </div>
        <div className='fotter-list'>
            <h3 className='footer-name'>Son nguyen</h3>
            <ul>
                <li> Hotline: 121212 </li>
                <li> Address: Da Lat </li>
                <li> Email: asadaf@gmail.com </li>
            </ul>
        </div>
        <div className='fotter-list'>
            <h3 className='footer-name'>Son nguyen</h3>
            <ul>
                <li> Hotline: 121212 </li>
                <li> Address: Da Lat </li>
                <li> Email: asadaf@gmail.com </li>
            </ul>
        </div>
    </footer>
    
     </>
  );
}

export default Footer;
