const logincred= require('../model/Authmodel');



const login = (req,res)=>{
    const body=req.body;
    console.log(body);
    const email=body.email;

    const password=body.password;
    if(!email || !password){
        return res.status(400).json({message:'Email and password are required'});
    }
    logincred.findOne({ email: email, password: password }).then((user)=>{
        if(user){
            res.status(200).json({ message: 'Login successful', user: user });          
        }else{
            res.status(401).json({ message: 'Invalid email or password' });
        }
    })

}
module.exports={login};