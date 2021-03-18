
// obtener ayuda vs code
const { response, request } = require('express');

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

const usersPost = ( req, res = response ) => {

    const { nombre } = req.body;

    res.json({
        message : 'post API - Controller',
        nombre
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