import React, { useState } from "react";
import defaultImage from "../../assets/images/hero/default.jpg";
import { motion, AnimatePresence } from "framer-motion";
const ProductImageGallery = ({ images = [], ProductName }) => {
  const displayImage =
    images.length > 0 ? images.map((img) => img.image) : [defaultImage];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
        {displayImage.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`w-20 h-24 border ${
              selectedImage === idx
                ? "border-black"
                : "border-transparent opacity-60"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={ProductName}
            />
          </button>
        ))}
      </div>

      <div className="flex-1 bg-gray-50 overflow-hidden">
        <motion.img
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={displayImage[selectedImage]}
          alt={ProductName}
          className="w-full h-full object-cover aspect-[4/5]"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
