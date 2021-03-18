// obtener ayuda vs code
const { response, request } = require('express');

const User = require('../models/user');

const usersGet = ( req, res = response ) => {

    const {q, nombre, apikey } = req.query;

    res.json({
        message : 'get API - Controller',
        q,
        nombre,
        apikey
    });
}

const usersPut = ( req, res = response ) => {

    const { id } = req.params;

    res.json({
        message : 'put API - Controller',
        id
    });
}

const usersPost = async ( req, res = response ) => {

    const body = req.body;

    const user = new User( body );

    try {

        await user.save();
        
    } catch (error) {
        throw new Error('error al guardar registro en base de datos')
    }

    

    res.json({
        message : 'post API - Controller',
        user
    });
}

const usersDelete = ( req, res = response ) => {
    res.json({
        message : 'delete API - Controller'
    });
}




module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}