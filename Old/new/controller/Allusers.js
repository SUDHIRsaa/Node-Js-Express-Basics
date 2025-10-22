const auth=require('../model/Authmodel');


const getAllUsers=async(req,res)=>{
    auth.find().then((users)=>{
        res.status(200).json(users);
    }).catch((err)=>{
        res.status(500).json({message:'Error fetching users',error:err});
    }
    );
}

module.exports={getAllUsers};