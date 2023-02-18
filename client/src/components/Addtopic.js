

import {Link}from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

function Login() {
  let [msg,setmsg] = useState('')
  let [topic,settopic] = useState(
      {
          id:'',
          name:'',
          date: '',
          finaldate:''
      }
  )
  async function  handlesubmit(e){
    let {data} = await axios.post('/addtopic',topic);
    console.log(data)
    if(data.isSuccess){
      settopic({
        id:'',
        name:'',
        date: '',
        finaldate:''
      })
      setmsg('Add Topic successfully')
    }else{
      setmsg('Add Topic failed')
    }
    
  }     
  
 
    
      
  useEffect(()=>{
    
  },[topic])
  return (
    <div className='add-topic-page'>
      <div className="new-topic">
          <div className='input'>
            <label className='label-input' >ID</label>
            <input type='text' onChange={(e)=>{settopic({id:  e.target.value,name:topic.name,date:topic.date,finaldate:topic.finaldate})}} value={topic.id}></input>
          </div>
          <div className='input'>
            <label className='label-input'  >Name</label>
            <input type='text' onChange={(e)=>{settopic({id:  topic.id,name:e.target.value,date:topic.date,finaldate:topic.finaldate})}} value={topic.name}></input>
          </div>
            <div className='input'>
            <label className='label-input'  >Date</label>
            <input type='date' onChange={(e)=>{settopic({id:  topic.id,name:topic.name,date:e.target.value,finaldate:topic.finaldate})}} value={topic.date}></input>
          </div>
            <div className='input'>
            <label className='label-input'  >Final Date</label>
            <input type='date' onChange={(e)=>{settopic({id:  topic.id,name:topic.name,date:topic.date,finaldate:e.target.value})}}  value={topic.finaldate}></input>
          </div>
          <div className='btn-submit-wrap'>
              <button onClick={handlesubmit} type='submit' className='submit-login'>Add Topic</button>
          </div>
          
      </div>
    </div>
  );
}

export default Login;
