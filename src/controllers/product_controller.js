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
postAddProduct(req,res){
   // validate data
   const { name, price, imageUrl } = req.body;
   let errors = [];
   if (!name || name.trim() == '') {
     errors.push('Name is required');
   }
   if (!price || parseFloat(price) < 1) {
     errors.push(
       'Price must be a positive value'
     );
   }
   try {
     const validUrl = new URL(imageUrl);
   } catch (err) {
     errors.push('URL is invalid');
   }

   if (errors.length > 0) {
     return res.render('new_product', {
       errorMessage: errors[0],
     });
   }
  // access data from form.
  console.log(req.body);
  ProductModel.add(req.body);
  let products = ProductModel.get();
  return res.render('products', {products});
}

}
