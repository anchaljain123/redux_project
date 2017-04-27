const userService = require('./users.service');

exports.createUser = function (req,res,next) {
    const userData = {name:'anchal'};
    userService.createUser(userData,res);
}

exports.getProduct = function (req,res,next) {
    userService.getProduct(res);
}

exports.deleteProduct = function (req,res,next) {
    const productData = req.body;
    userService.deleteProduct(productData,res);

}

exports.updateProduct = function (req,res,next) {
        const product = req.body;
        userService.updateProduct(product,res);
}