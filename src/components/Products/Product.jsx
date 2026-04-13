import defaultimage from "../../assets/images/hero/default.jpg";
import React, { useEffect, useMemo, useState } from "react";
import {
  BiHeart,
  BiSearch,
  BiShuffle,
  BiSolidHeart,
  BiStar,
} from "react-icons/bi";
import apiClient from "../../services/api-client";
import { Link } from "react-router";
import useCartContext from "../../hooks/useCartContext";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToWishlist, wishlist, removeWishlist } = useCartContext();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        let url = "/products/";
        let allProducts = [];

        while (url) {
          const res = await apiClient.get(url);
          allProducts = [...allProducts, ...res.data.results];
          url = res.data.next;
        }

        setProducts(allProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);
  useEffect(() => {
    apiClient
      .get("/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter Products by Category
  const filteredProducts = useMemo(() => {
    if (!activeTab) return products;
    return products.filter((p) => p.category === activeTab);
  }, [products, activeTab]);

  const isWishlisted = (productId) => {
    return wishlist?.some((item) => item?.product?.id === productId);
  };
  // selacte the wishlist
  const toggleWishlist = async (productId) => {
    const existing = wishlist?.find((item) => item?.product?.id === productId);
    if (existing) {
      await removeWishlist(existing.id);
    } else {
      await addToWishlist(productId);
    }
  };

  return (
    <section className="max-w-300 mx-auto mb-6">
      {/* Category Tabs */}
      <nav className="flex justify-center items-center space-x-12 mb-16">
        <button
          onClick={() => setActiveTab(null)}
          className={`font-bold ${activeTab === null ? "text-black" : "text-gray-400"}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`text-lg font-bold transition-all duration-300 relative pb-1 cursor-pointer ${
              activeTab === cat.id
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {cat?.name}
            {activeTab === cat && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
            )}
          </button>
        ))}
      </nav>

      {/* Product Grid */}
      {loading && !error && filteredProducts.length > 0 ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((p) => (
            <div key={p.id} className="flex flex-col group">
              {/* Image Container */}
              <div className="relative aspect-3/4 bg-gray-50 overflow-hidden mb-4 transition-all duration-300">
                <img
                  src={
                    p.images.length > 0 ? p.images?.[0]?.image : defaultimage
                  }
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-0 left-0">
                  {p.badge === "NEW" && (
                    <div className="bg-white text-black text-[10px] font-bold px-3 py-1 m-4 tracking-widest uppercase">
                      NEW
                    </div>
                  )}
                  {p.badge === "SALE" && (
                    <div className="bg-black text-white text-[10px] font-bold px-3 py-1 m-4 tracking-widest uppercase">
                      SALE
                    </div>
                  )}
                </div>

                {/* Hover Action Overlay (Side Icons) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => toggleWishlist(p?.id)}
                    className="bg-white p-2 hover:bg-black hover:text-white transition-colors border border-gray-100 shadow-sm"
                  >
                    {isWishlisted(p?.id) ? (
                      <BiSolidHeart className="text-red-500" />
                    ) : (
                      <BiHeart className="hover:text-red-500" />
                    )}
                  </button>
                  <button className="bg-white p-2 hover:bg-black hover:text-white transition-colors border border-gray-100 shadow-sm">
                    <BiShuffle />
                  </button>
                  <button className="bg-white p-2 hover:bg-black hover:text-white transition-colors border border-gray-100 shadow-sm">
                    <BiSearch />
                  </button>
                </div>

                {/* Add To Cart Overlay (Bottom Left) */}
                <div className="absolute bottom-4 left-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link to={`/products/${p.id}`}>
                    <button className="text-red-500 font-bold text-xs uppercase tracking-tighter hover:text-red-600">
                      + Add To Cart
                    </button>
                  </Link>
                </div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm text-gray-800 font-medium group-hover:text-red-500 transition-colors cursor-pointer">
                  {p?.name}
                </h3>

                {/* Rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <BiStar
                      key={i}
                      className="w-3 h-3"
                      color={i < p.rating ? "#F59E0B" : "#D1D5DB"}
                      // Using inline check for the screenshot look where empty stars are outline gray
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center mt-1">
                  <span className="text-base font-bold text-black">
                    ${Number(p.price).toFixed(2)}
                  </span>

                  {/* Color Swatches */}
                  {p.color && (
                    <div className="flex gap-1.5">
                      {(Array.isArray(p.color) ? p.color : [p.color]).map(
                        (color, idx) => (
                          <div
                            key={idx}
                            className="w-2.5 h-2.5 rounded-full cursor-pointer ring-offset-1 hover:ring-1 ring-gray-300 transition-all"
                            style={{ backgroundColor: color }}
                          />
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* error loader */}
      {!loading && filteredProducts.length === 0 && (
        <div className="py-20 w-80 h-80 mx-auto">
          <div
            role="alert"
            className=" bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 shrink-0 mr-2 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold">{error} </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
