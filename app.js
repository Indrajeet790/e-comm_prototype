import express from 'express'
import ProductController from "./src/controllers/product_controller.js";
const server = express();

// create an instance of productController
const productController = new ProductController()

server.get('/',productController.getProducts)

server.use(express.static("src/views"));
server.listen(8000,(err)=>{
    if(err){
        console.log("server error")
    }else{
        console.log("server is running on port 8000")
    }
})
