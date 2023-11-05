import express from 'express'
import path from 'path';
import ProductController from "./src/controllers/product_controller.js";
import UserController from './src/controllers/userController.js';
import expressLayouts from 'express-ejs-layouts';
import validationMiddleware from './src/middleware/validation_Middleware.js'
import {uploadFile} from './src/middleware/file-upload-middleware.js';
const server = express();

// parse form data
server.use(express.urlencoded({extended: true}));

// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views')); 

// middleware
server.use(expressLayouts);
server.use(express.static('public'));

// create an instance of productController
const productController = new ProductController()

// create an instance of userController
const usersController =new UserController();

// register route
server.get('/register', usersController.getRegister);
server.get('/login', usersController.getLogin);

// product page routes
server.get('/',productController.getProducts)
server.get('/new',productController.getAddProduct)
server.post('/', uploadFile.single('imageUrl'),validationMiddleware,productController.postAddProduct)
server.get(
    '/update-product/:id',
    productController.getUpdateProductView
  );
  server.post(
    '/update-product',
    productController.postUpdateProduct
  );
  server.post('/delete-product/:id', productController.deleteProduct);

server.use(express.static("src/views"));
server.listen(8000,(err)=>{
    if(err){
        console.log("server error")
    }else{
        console.log("server is running on port 8000")
    }
})
