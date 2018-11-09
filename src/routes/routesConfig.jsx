import Products from "./Products";
import Product from "./Product";

/**
 * a json configuration for changing routes
 * @type {*[]}
 */
const routesConfig = [
  {
    path: "/",
    component: Products
  },
  {
    path: "/product/:id",
    component: Product
  }
];

export default routesConfig;
