const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    nombre: { type : String, required: [ true, 'El nombre es obligatorio'] }
});



module.exports = model('User', UserSchema );