import path from "path";
import  ProductModel from "../models/product_model.js"
export default class productController {
  getProducts(req, res) {
    let products = ProductModel.get();


    // console.log(products)
      res.render("products.ejs",{products: products})
  }
// new product
getAddProduct(req, res, next) {
  res.render('new_product', {
    errorMessage: null,
  });
}
postAddProduct(req,res,next){
   // validate data
  
  // access data from form.
  // console.log(req.body);
  ProductModel.add(req.body);
  var products = ProductModel.get();
  return res.render('products', {products});
}

}
