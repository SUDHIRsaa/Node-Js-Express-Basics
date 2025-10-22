const signupmodel=require('../model/Authmodel');

const signup=(req,res)=>{
const body=req.body;
console.log(body);
if(!body.email || !body.password || !body.name || !body.number){
    return res.status(400).json({message:'All fields are required'});
}
signupmodel.findOne({email:body.email}).then((user)=>{
    if(user){
        res.status(409).json({message:'User already exists'});
    }
    else{
        const newuser=new signupmodel({
            email:body.email,
            password:body.password,
            name:body.name,
            number:body.number
        });

        newuser.save().then(() => {
            res.status(201).json({ message: 'User registered successfully' });
        }).catch((err) => {
            res.status(500).json({ message: 'Error registering user', error: err });
        });
    }
});
}

module.exports={signup};