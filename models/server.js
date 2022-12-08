const express = require('express')
var cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosRoutePath ='/api/Usuarios';

        //middlewares
        this.middlewares();
        //Rutas de mi app


        this.routes();
    }

    middlewares() {
        //directorio publico 
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());

        //parseo y lectura del body 
        this.app.use(express.json());
    }

    routes() {
       this.app.use(this.usuariosRoutePath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;