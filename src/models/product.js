/**
 *  model that takes the data from Products response and safely map it
 */
import ProductImage from "./productImage";

class Product {
  constructor({ id, title, description, specification, price, images }) {
    this.id = id || 0;
    this.title = title || "";
    this.description = description || "";
    this.specification = specification || "";
    this.price = price || "";
    this.prepareImages(images);
  }

  /**
   * modeling images
   * @param images
   */
  prepareImages(images) {
    this.images = images.map(image => new ProductImage(image));
  }

  /**
   * a getter that returns the first thumbnail
   * @returns {*}
   */
  get thumb() {
    if (this.images.length) {
      return this.images[0].thumbnail;
    }
    return "https://via.placeholder.com/800x600.png?text=no+image";
  }
}

export default Product;
