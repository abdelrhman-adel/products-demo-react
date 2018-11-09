import Loadable from "react-loadable";
import Loading from "../components/Loading";

export default () =>
  Loadable({
    loader: () =>
      import(/* webpackChunkName: "product-route" */ "./containers/ProductContainer.jsx"),
    loading: Loading
  });
