import { api } from "./api";

it("creates api urls", () => {
  const productsUrl = api.products;
  expect(productsUrl).toBe(
    "http://private-5815fe-recommendationsknip.apiary-mock.com/products"
  );
});
