
const productModel = require("./product.model");


const getallproducts=async (req,res)=>{
    try {
    const products = await productModel.find();
    console.log(req.url)
    res.json(products)
    }catch (err) {
    res.status(500).json({ msg: "Error fetching products", error: err.message }); //
}

}

const getbyid=async (req,res)=>{
    try {
    const id = req.params.productid;
    const product = await productModel.findById(id);
    if(!product)
    {
        return res.status(404).json({msg:"product not found"});
    }
    res.json(product);
}catch (err) {
    res.status(500).json({ msg: "Error fetching products", error: err.message }); //
}

}

const update= async (req, res) => { 

        const id = req.params.productid; 
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true }); //

        if (!updatedProduct) { 
            return res.status(404).json({ msg: "product not found" }); 
        }
        res.json(updatedProduct); 
    }
module.exports={getbyid,getallproducts,update}