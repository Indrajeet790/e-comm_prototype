import express from 'express'
import path from 'path';
import ProductController from "./src/controllers/product_controller.js";
const server = express();

// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views')); 

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
