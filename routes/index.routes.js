const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller.js')

router.get('/', controller.index);
//router.get('/productos', controller.productos);

module.exports = router;