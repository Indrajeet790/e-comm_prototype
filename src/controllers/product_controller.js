import path from "path";
import  ProductModel from "../models/product_model.js"
export default class productController {
  getProducts(req, res) {
    let products = ProductModel.get();


    // console.log(products)
      res.render("products.ejs",{products: products})
  }
}
