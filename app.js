const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect(process.env.MONGODB_URI);


app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});