import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Loader from "./Loader";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Deshboard from "../pages/Deshboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Activate/ActivateAccount";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import Profile from "../pages/Profile";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import AdminRoute from "../components/AdminRoute";
import Wishlist from "../pages/Wishlist";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";

const AppRouters = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000); // 2 sec loader

    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Login />} />
          <Route path="/activate/:uid/:token" element={<ActivateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="shop/:productID" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
        <Route
          path="deshboard"
          element={
            <AdminRoute>
              <Deshboard />
            </AdminRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouters;
