import express from 'express'//para utilizar el import se necesita que en package se especifique una variable type "module"
import cors from 'cors'
import dbconection from '../database/config.js'

class Server{
    constructor(){
        //port
        this.port=process.env.PORT;
        //aqui se crea el servidor
        this.app = new express();//crear una estancia un "servido" que escucha
        //conectar a la bd "base de datos"
        this.conectarBd();
        //dar a conocer todos los midlewares
        this.middlewares();
        //rutas o routes
        this.routes();
    }

    routes(){

    }//las rutas

    async conectarBd(){
        await dbconection();
    }//conectar a la base de datos

    middlewares(){
        this.app.use(express.json());//permite aceptar archivos json
        this.app.use(cors());//validar direciones ip
        this.app.use(express.static('public'));//nos integra el fronEnd a la pagina 
    }//aqui se crea una funcion con todos los middlewares que tendra el server

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        });//permite que el servidor quede escuchando 
    }
}

export default Server
//exportar la clase server para poderla utilizar en app.js