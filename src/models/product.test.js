import mock from "./mock";
import Product from "./product";

it("creates a show model successfully", () => {
  const product = new Product(mock);
  expect(product.id).toBe(1);
  expect(product.title).toBe("Nerf N-Strike Blazin Bow Blaster");
  expect(product.thumb).toBe(
    "http://www.hasbrotoyshop.com/wcsstore/HTSCatalogAssetStore/common/productimages/en_US/f975b58950569047f5d9773f03ec97cc/4469FD4750569047F5D267C0D8001048.jpg"
  );
});
