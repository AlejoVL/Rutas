const express = require('express');
const app = express();
const path = require('path');

const routes = require('../routes/index.routes');

app.use(routes);

app.use(express.static(path.join(__dirname, '../public')));
app.use((req, res) =>{
    res.sendFile(path.join(__dirname, '../public/error.html'));
});

app.listen(3000, () => {
    console.log('Servidor escuchado en el puerto 3000')
});