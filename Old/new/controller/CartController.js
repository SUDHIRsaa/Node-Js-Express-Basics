const cart=require('../model/Cart');

const addtocart=(req,res)=>{
    const body=req.body;
    console.log(body);
    if(!body.productId || !body.quantity || !body.img){
        return res.status(400).json({message:'All fields are required'});
    }

    const newitem=new cart({
        productId:body.productId,
        quantity:body.quantity,
        img:body.img
    });

    newitem.save().then(() => {
        res.status(201).json({ message: 'Item added to cart successfully' });
    }).catch((err) => {
        res.status(500).json({ message: 'Error adding item to cart', error: err });
    });
}
const getCartItems=(req,res)=>{
    cart.find().then((items)=>{
        res.status(200).json(items);
    }).catch((err)=>{
        res.status(500).json({message:'Error fetching cart items',error:err});
    });

}
const removeCartItem=(req,res)=>{
    const body=req.body;
    cart.findByIdAndDelete(body.id).then(()=>{
        res.status(200).json({message:'Item removed from cart successfully'});
    }).catch((err)=>{
        res.status(500).json({message:'Error removing item from cart',error:err});
    });
}
module.exports={addtocart,getCartItems,removeCartItem};