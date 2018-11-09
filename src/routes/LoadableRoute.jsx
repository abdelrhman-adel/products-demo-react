import React from "react";

const LoadableRoute = componentFunc => props => {
  const Component = componentFunc();
  return <Component {...props} />;
};

export default LoadableRoute;
