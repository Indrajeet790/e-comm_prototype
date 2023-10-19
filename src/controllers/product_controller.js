import path from "path";
import  ProductModel from "../models/product_model.js"
export default class productController {
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products)
    // console.log(path.resolve());

    return res.sendFile(path.join(path.resolve(), "src",'views', "products.html"));
  }
}
