const {addtocart,getCartItems,removeCartItem}=require('../controller/CartController');
const express=require('express');
const router=express.Router();


router.post('/add-to-cart',addtocart);
router.get('/get-cart-items',getCartItems);
router.post('/remove-cart-item',removeCartItem);
module.exports=router;