const { response } = require('express')


const usuariosGet = (req, res) => {
    const {q, nombre,apiKey="no key"} = req.query;
    res.json({
        msg: 'get API Controller',
        q,nombre,apiKey
    })
}

const usuariosPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'get API Controller',
        body
    })
}

const usuariosPut = (req, res) => {
    const id= req.params.id;
    res.json({
        msg: 'put API Controller',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API Controller'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch API Controller'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
    usuariosPatch
};
