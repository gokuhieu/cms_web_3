

import {Link,Outlet}from 'react-router-dom'
import {useState,useEffect} from 'react'
function Login() {
  let [addidea,setaddidea] = useState(
      {
          id:'',
          name:'',

      }
  )
      
       let submit_handle=(e)=> {
        console.log(addidea)
      }
  useEffect(()=>{

  },[addidea])
  return (
    <>
    <div className='add-addidea-page'>
      <div className="new-addidea">
          <div className='input'>
            <label className='label-input' >ID</label>
            <input type='text' onChange={(e)=>{setaddidea({id:  e.target.value,name:addidea.name})}} value={addidea.id}></input>
          </div>
          <div className='input'>
            <label className='label-input'  >Name</label>
            <input type='text' onChange={(e)=>{setaddidea({id:  addidea.id,name:e.target.value})}} value={addidea.name}></input>
          </div>       
          <div className='btn-submit-wrap'>
              <button onClick={submit_handle} type='submit' className='submit-login'>Add addidea</button>
          </div>
          
      </div>
    </div>
   
    </>
    
  );
}

export default Login;
