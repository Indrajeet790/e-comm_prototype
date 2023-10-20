import path from "path";
import  ProductModel from "../models/product_model.js"
export default class productController {
  getProducts(req, res) {
    let products = ProductModel.get();


    // console.log(products)
      res.render("products.ejs",{products: products})
  }
// new product
  getAddForm(req,res){
    return res.render('new_product')
}
addnewProduct(req,res){
  // access data from form.
  console.log(req.body);
  ProductModel.add(req.body);
  let products = ProductModel.get();
  return res.render('products', {products});
}

}
