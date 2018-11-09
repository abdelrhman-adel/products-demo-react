/**
 *  model that takes the images from a product ∏and safely map it
 */
class ProductImage {
  constructor({ thumb, original }) {
    this.thumbnail =
      thumb || "https://via.placeholder.com/400x300.png?text=no+thumb";
    this.original =
      original || "https://via.placeholder.com/800x600.png?text=no+image";
  }
}

export default ProductImage;
