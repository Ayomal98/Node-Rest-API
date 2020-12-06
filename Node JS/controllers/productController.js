const Product=require('../models/productModel');

//route to get the all the products
async function getProducts(req,res){
    try{
        const products=await Product.findAll()
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(products));
        console.log('wtf')
    }catch(error){
        console.log(error);
    }
}

//route to get a single product using id ;
async function getProduct(req,res,id){
    try{
        console.log("Id is " + id);
        const product=await Product.findById(id);
        if(!product){
        res.writeHead(404,{'Content-type':'application/json'})
        res.end(JSON.stringify({message:'Product not found'}));
        }
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(product));
    }catch(error){
        console.log(error);
    }
}
//route to create products;
async function createProduct(req,res){
    try{
        const product={
            title:'Test Product',
            description:'This is my product',
            price:100
        }
        
        const newProduct=await Product.create(product);
        res.writeHead(201,{'Content-type':'application/json'})
        return res.end(JSON.stringify(newProduct));
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getProducts,
    getProduct,
    createProduct
}