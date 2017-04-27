const User = require('./user.model');

exports.createUser = function (userdata,res) {
    User.create(userdata,function (err,data) {
        if(err) console.log(err);
        else
        {
            console.log("Success")
        }
    })

}

exports.getProduct = function (res) {

    User.find({},function (err,data) {

        if(err) console.log(err);
        else
        {

          res.send(data)
        }
    })

}

exports.deleteProduct = function (productData,res) {

    User.remove(productData,function (err,data) {
        if(err) console.log(err);
        else{
            res.send(data)
        }
    })
}

exports.updateProduct = function (product,res) {

    User.find(productId,function (err,data) {
        if(err) console.log(err);
        else {
            User.update(product,function (err,data) {
                if(err) console.log(err);
                else
                {
                    res.send(data)
                }
            })
        }
    })
}