const express= require("express");
const mongoose = require('mongoose');
const url = "mongodb+srv://mohamedzggmk:Killer123344@cluster0.su5mklo.mongodb.net/os?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url).then(console.log("connect"));




const app = express();

app.use(express.json());
const controller = require("./products.controller")
const {body,validationResult}=require("express-validator")


app.get("/api/products/:productid",controller.getbyid)

app.get("/api/products",controller.getallproducts)

const validationdata= [body("title").notEmpty().withMessage("title is requierd"),body("price").notEmpty().withMessage("price is requierd")]
app.post("/api/product",validationdata,(req,res)=>{
    const errors=validationResult(req);
console.log(errors);
    if(!errors.isEmpty()){
        return res.json(errors.array())
}
    console.log(req.body);
  products.push({id:products.length+1,...req.body})
   res.json();
})

app.patch("/api/product/:productid",controller.update)



app.listen(3000,()=>{console.log("listening 3000")})