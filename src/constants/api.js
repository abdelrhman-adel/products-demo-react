const Root = "http://private-5815fe-recommendationsknip.apiary-mock.com";
/**
 * creates Api urls dynamicly, with passing dynamic data and Root url
 * @param root
 * @returns {{}}
 */
const EndPoints = root => ({
  products: `${root}/products`
});

export const api = EndPoints(Root);
