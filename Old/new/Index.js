const express =require('express');
const mongoose=require('mongoose');

const app=express();

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/testtt')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB:',err);
});

const authRoutes=require('./routes/Authroutes');
const cartRoutes=require('./routes/Cartroutes');
app.use('/auth',authRoutes);
app.use('/cart',cartRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});