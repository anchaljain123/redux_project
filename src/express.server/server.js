require('./config/connection');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userController = require('./api/users/users.controller');

app.use(bodyParser.json());

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);

app.get('/products',userController.getProduct);

app.delete('/products',userController.deleteProduct);

app.post('/products',userController.createUser);

app.put('/products',userController.updateProduct);

app.listen(4000,()=>{
    console.log("SERVER HAS STARTED ... ");
})