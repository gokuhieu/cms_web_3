

import {Link,Outlet}from 'react-router-dom'
import {useState,useEffect} from 'react'
function Login() {
  let [category,setcategory] = useState(
      {
          id:'',
          name:'',

      }
  )
      
       let submit_handle=(e)=> {
        console.log(category)
      }
  useEffect(()=>{

  },[category])
  return (
    <>
    <div className='add-category-page'>
      <div className="new-category">
          <div className='input'>
            <label className='label-input' >ID</label>
            <input type='text' onChange={(e)=>{setcategory({id:  e.target.value,name:category.name})}} value={category.id}></input>
          </div>
          <div className='input'>
            <label className='label-input'  >Name</label>
            <input type='text' onChange={(e)=>{setcategory({id:  category.id,name:e.target.value})}} value={category.name}></input>
          </div>       
          <div className='btn-submit-wrap'>
              <button onClick={submit_handle} type='submit' className='submit-login'>Add Category</button>
          </div>
          
      </div>
    </div>
   
    </>
    
  );
}

export default Login;
