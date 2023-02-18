const express =require('express');
const http = require("http");
const app = express();
const url  =require('url');
const cors =require("cors")
const port = process.env.PORT || 3000;
const Main_Routes = require('./Routes/Main')

const ejs =require('ejs') 
var cookieSession = require('cookie-session')
const morgan =require('morgan')
const bodyParser = require('body-parser')
var server = require('http').Server(app)
const { Server } = require("socket.io");
const io = new Server(server,{cors: {
    origin: '*'
}});
app.set('trust proxy', 1)
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));



app.use(cookieSession({
    name: 'session',
    keys: ["phamlehaison"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))


app.use(cors())
app.use(morgan('dev'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});



io.on('connection', (socket) => {
    io.emit('authentication',{body:true})
  });

app.use("/",Main_Routes)






server.listen(port, () => {
    console.log(`Application started and Listening on port ${port}`);
});

