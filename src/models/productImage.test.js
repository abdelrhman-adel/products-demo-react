import mock from "./mock";
import ProductImage from "./productImage";

it("creates an image model successfully", () => {
  const productImage = new ProductImage(mock.images[0]);
  expect(productImage.thumbnail).toBe(
    "http://www.hasbrotoyshop.com/wcsstore/HTSCatalogAssetStore/common/productimages/en_US/f975b58950569047f5d9773f03ec97cc/4469FD4750569047F5D267C0D8001048.jpg"
  );
});
