

import {Link}from 'react-router-dom'
import {useState,useEffect} from 'react'
import { AiOutlineSend  } from 'react-icons/ai';
function View() {

  return (
    <div className='comment-page'>
        <div className='previous-comment'>
            <div className='info'>
                <p>Name</p>
                <p>Text</p>
            </div>
            <p className='date'>date</p>
        </div>
        <div className='new-comment'>
            <input type='text' placeholder='input comment' className='input-comment'></input>
            <button className='btn-send'><AiOutlineSend/></button>
        </div>
     
    </div>
  );
}

export default View;
