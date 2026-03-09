const http = require("http");
const app = require("./app");
require('dotenv').config('./env')

const server = http.createServer(app);

server.listen(process.env.PORTA_API || 3000, ()=> {
    console.log("Express rodando na porta ", process.env.PORTA_API || 3000);
})