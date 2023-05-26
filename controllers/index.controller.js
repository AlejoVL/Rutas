controller = {}

controller.index = (req, res) => {
    let nombrePersona = req.query.nombre;
    let apellidoPersona = req.query.apellido;

    res.send('valor: ' + nombrePersona + ' ' + apellidoPersona);
}

module.exports = controller;
// path = require('path');

 controller.index = (req, res) => {
     res.end('Conexion establecida desde controller');
 }

// controller.productos = (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/productos.html'));
// }

// module.exports = controller;