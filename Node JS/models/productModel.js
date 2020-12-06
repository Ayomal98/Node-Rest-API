const products=require('../products.json');
const {v4:uuidv4}=require('uuid');
const {writeDataToFile}=require('../utils')
//to find the products
function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(products)
    })
}
//to find the products by id
function findById(id){
    return new Promise((resolve,reject)=>{
        const product=products.find((p)=>p.id === id)
        resolve(product);
    })
}

//to create the product
function create(product){
    return new Promise((resolve,reject)=>{
        const newProduct={id:uuidv4(),...product};
        products.push(newProduct);
        writeDataToFile('./products.json',products);
        resolve(newProduct)
    })
}

module.exports={
    findAll,
    findById,
    create
}