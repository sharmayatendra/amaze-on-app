import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { ProductProvider , CartProvider , AuthProvider} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById("root")
);
