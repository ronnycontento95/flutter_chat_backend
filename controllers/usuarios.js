const { response } = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async ( req, res = response ) => {

    const desde = Number( req.query.desde ) || 0;//punto inicial 

    const usuarios = await Usuario
        .find({ _id: { $ne: req.uid } }) // el usuario autenticado no se muestre
        .sort('-online')//ordene de forma desendente 
        .skip(desde)
        .limit(20)//limite de registros

    
    res.json({
        ok: true,
        usuarios,
    })
}



module.exports = {
    getUsuarios
}