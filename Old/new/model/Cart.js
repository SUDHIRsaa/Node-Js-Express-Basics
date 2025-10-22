const mongoose=require('mongoose');

const cart=mongoose.Schema(
    {
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        img:{
            type:String,
            required:true
        }

    }
)

module.exports=mongoose.model('Cart',cart);