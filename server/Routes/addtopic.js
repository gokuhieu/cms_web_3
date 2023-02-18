const { json } = require("body-parser")

const connect = require('../database/connect')
 let addtopic = async(req,res,next)=>{
  let date = new Date(req.body.date)
  console.log(date)
  let finaldate = new Date(req.body.finaldate)
  const query = `insert into public.topic (id,name,clousuredate,finalclosuredate) values('${req.body.id}','${req.body.name}','${format_date(date.getMonth()+1)}-${format_date(date.getDate())}-${date.getFullYear()}','${format_date(finaldate.getMonth()+1)}-${format_date(finaldate.getDate())}-${finaldate.getFullYear()}')`
  let topic = await connect(query)
  if(topic !='err'){
    res.json({isSuccess:true})
  }else{
    res.json({isSuccess:false})
  }
}
function format_date(date){
    if(date<10){
        return `0${date}`
    }else{
        return date
    }
}
module.exports = addtopic
