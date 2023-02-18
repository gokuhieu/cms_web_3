const {Server } =require('socket.io')

const io = new Server(3002)
function getsocket(){
    return io
}
module.exports =io
