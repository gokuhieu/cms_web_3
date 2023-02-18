const { json } = require("body-parser")
const {socket} = require("../server")
const connect = require('../database/connect')
 let addtopic = async(req,res,next)=>{
  let date = new Date(req.body.date)
  console.log(date)
  let finaldate = new Date(req.body.finaldate)
  const query = `select *from public.account where username ='${req.body.username}' and password ='${req.body.password}'`
  let account = await connect(query)
  if(account.rowCount>0){
    next()
  }
}

module.exports = addtopic
