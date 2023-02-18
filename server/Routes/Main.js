const express = require('express');
const Main_Routes = express.Router()
const path = require('path')
const fs = require('fs')
const addtopic =require('./addtopic')
const authentication =require('./authentication')

Main_Routes.post('/addtopic',addtopic)
Main_Routes.post('/authentication',authentication)
module.exports = Main_Routes