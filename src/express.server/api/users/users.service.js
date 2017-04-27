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
    let productId ={'_id':product._id};
    const productDetails = {
        name:product.name,
        type:product.type,
        price:product.price,
        brand:product.brand,
    }
    User.update(productId,product,{upsert:true},(err,data) =>{
        if(err) console.log(err);
        else {
            User.find({}, (err, updateData) => {
                res.send(updateData);
            })
        }
    })
}




