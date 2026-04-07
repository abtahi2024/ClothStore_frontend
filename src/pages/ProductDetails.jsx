import React, { Suspense, useEffect, useState } from "react";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import apiClient from "../services/api-client";
import { useParams } from "react-router";
import StarRating from "../components/ProductDetails/StarRating";
import ReviewSection from "../components/Reviews/ReviewSection";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { productID } = useParams();
  const SIZES = ["XXL", "XL", "L", "S"];
  const colors = [
    { name: "Navy", hex: "#1e293b" },
    { name: "Gold", hex: "#fbbf24" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#ffffff" },
    { name: "Red", hex: "#ef4444" },
  ];

  useEffect(() => {
    apiClient.get(`/products/${productID}/`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [productID]);

  if (loading) {
    return <div className="">Loading...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className=" bg-white pb-20">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <Suspense fallback={<div></div>}>
            <ProductImageGallery
              images={product?.images || []}
              ProductName={product?.name || "product"}
            />
          </Suspense>
          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-2xl font-medium mb-2">{product?.name}</h2>
            <div className="mb-6">
              <StarRating />
            </div>

            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-2xl font-bold">
                ${product?.price.toFixed(2)}
              </span>
              {product?.originalPrice && (
                <span className="text-lg text-brand-secondary line-through">
                  ${product?.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-brand-secondary text-sm leading-relaxed mb-8">
              {product.description}
            </p>
            {/* Options */}
            <div className="space-y-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold mb-3 block">
                  Size:{" "}
                  <span className="font-normal text-brand-secondary">
                    {selectedSize}
                  </span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs border transition-all ${
                        selectedSize === size
                          ? "bg-brand-primary text-white border bg-black"
                          : "border-gray-200 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold mb-3 block">
                  Color:
                </span>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => setSelectedColor(color.hex)}
                      className={`w-6 h-6 rounded-full border p-0.5 transition-all ${
                        selectedColor === color.hex
                          ? "border-brand-primary scale-110"
                          : "border-transparent"
                      }`}
                    >
                      <div
                        className="w-full h-full rounded-full border border-black/5"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <AddToCartButton
                quantity={quantity}
                setQuantity={setQuantity}
                product={product}
              />
            </div>
          </div>
        </div>
        <ReviewSection />
      </main>
    </div>
  );
};

export default ProductDetails;
