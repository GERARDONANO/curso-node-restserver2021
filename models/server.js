
const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // middlewares
        this.middlewares();

        // rutas de mi app
        this.routes();
    }

    middlewares(){
        // cors
        this.app.use( cors() )

        // lectura y parseo del body
        this.app.use( express.json() );

        // directorio publico
        this.app.use( express.static('public') );
    }

    routes(){

        this.app.use( this.usersPath, require('../routes/user') );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('servidor corriendo: ', this.port );
        });
    }



}

module.exports = Server;