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
            User.find({},(err,updateData) =>{
                res.send(updateData)
            })

        }
    })
}

exports.updateProduct = function (product,res) {
    let productName ={name:product.name};
    User.find(productName,function (err,data) {
        if(err) console.log(err);
        else{
            User.update(product,(err,data) =>{
                if(err) console.log(err);
                else {
                    User.find({}, (err, updateData) => {
                        console.log(updateData,">>>>>>>>>>>>>")
                        res.send(updateData)
                    })
                }
            })
        }
    })
}


