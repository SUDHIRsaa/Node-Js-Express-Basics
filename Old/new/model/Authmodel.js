const { default: mongoose } = require('mongoose');
const monhogoose=require('mongoose');

const Authcred=mongoose.Schema(
    { 
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true,
           
        },
        number:{
            type:Number,
            required:true,
            unique:true
        }
    }
)
module.exports=mongoose.model('Authcred',Authcred);