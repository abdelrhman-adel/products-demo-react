import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

import Routes from "./routes";

import "./App.sass";

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Router>
          <DefaultLayout>
            <Routes />
          </DefaultLayout>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
