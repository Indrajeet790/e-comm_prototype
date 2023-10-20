import express from 'express'
import path from 'path';
import ProductController from "./src/controllers/product_controller.js";
import expressLayouts from 'express-ejs-layouts';
const server = express();

// parse form data
server.use(express.urlencoded({extended: true}));

// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views')); 

// middleware
server.use(expressLayouts);

// create an instance of productController
const productController = new ProductController()

server.get('/',productController.getProducts)
server.get('/new',productController.getAddProduct)
server.post('/',productController.postAddProduct)

server.use(express.static("src/views"));
server.listen(8000,(err)=>{
    if(err){
        console.log("server error")
    }else{
        console.log("server is running on port 8000")
    }
})
