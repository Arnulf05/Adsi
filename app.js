import {} from 'dotenv/config.js'

import Server from './modles/server.js'



const server = new Server();//crear una intancia al servidor 

server.listen();//hacer que el server escuches 