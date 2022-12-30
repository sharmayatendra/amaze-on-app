import React from "react";
import {
  Homepage,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup,
  Notfound,
} from "./pages/index";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequiresAuth } from "./components/RequiresAuth";
import { useAuth } from "./context";
const App = () => {
  const {
    state: { isAuth },
  } = useAuth();
  return (
    <>
      <ToastContainer
        position="bottom-center"
        theme="dark"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/product" element={<ProductListing />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth isAuth={isAuth}>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth isAuth={isAuth}>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export { App };
