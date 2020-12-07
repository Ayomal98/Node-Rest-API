let products=require('../products.json');
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
//to update the product
function update(id,product){
    return new Promise((resolve,reject)=>{
        const index=products.findIndex((p)=>p.id===id)
        products[index]={id, ...product}
        writeDataToFile('./products.json',products);
        resolve(products[indexs])
    })
}
//to delete the product
function remove(id){
    return new Promise((resolve,reject)=>{
        products=products.filter((p)=>p.id !== id)
        writeDataToFile('./products.json',products);
        resolve()
    })
}

module.exports={
    findAll,
    findById,
    create,
    update,
    remove
}