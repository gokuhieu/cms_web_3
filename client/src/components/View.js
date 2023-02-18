

import {Link}from 'react-router-dom'
import {useState,useEffect} from 'react'
import { AiOutlineLike  } from 'react-icons/ai';
function View() {

  return (
    <div className='view-page'>
            <table class="table" >
        <thead class="thead-dark">
            <tr>
            <th scope="col">No</th>
            <th scope="col">Visit Time</th>
            <th scope="col">User</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td scope="row">1</td>
            <td>Mark</td>
            <td>Otto</td>
            </tr>  
        </tbody>
        </table>

     
    </div>
  );
}

export default View;
