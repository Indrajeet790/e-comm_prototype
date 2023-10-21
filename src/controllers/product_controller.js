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
// 
getUpdateProductView(req, res, next) {
  // 1. if product exists then return view
  const  id = req.params.id;
  const productFound = ProductModel.getById(id);
  if (productFound) {
    res.render('update-product', {
      product: productFound,
      errorMessage: null,
    });
  }
  // 2. else return errors.
  else {
    res.status(401).send('Product not found');
  }
}
// submit updated data
postUpdateProduct(req, res) {
  ProductModel.update(req.body);
  var products = ProductModel.get();
  res.render('products.ejs', { products });
}


}
