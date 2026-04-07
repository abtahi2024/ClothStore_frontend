import React from "react";
import Hero from "../pages/Hero";
import Features from "../components/Features";
import Product from "../components/Products/Product";
import Discount from "../components/Discount/Discount";
import InstagramMain from "../components/Instagram/InstagramMain";
import FashionTrends from "../components/NewTrends/FashionTrends";

const Home = () => {
  return (
    <div className="grow">
      <Hero />
      <Features />
      <Product />
      <Discount />
      <InstagramMain />
      <FashionTrends/>
    </div>
  );
};

export default Home;
