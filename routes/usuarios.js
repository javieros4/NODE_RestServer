const { Router} = require('express');
const {usuariosDelete,
    usuariosGet,
    usuariosPost,
     usuariosPut,
     usuariosPatch } = require('../controllers/usuarios')
const router = Router();

router.get('/',usuariosGet);
router.put('/:id',usuariosPut);
router.post('/',usuariosPost)
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch)


module.exports  = router;