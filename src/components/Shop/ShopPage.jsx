import React, { useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import useFetchCategories from "../../hooks/useFetchCategories";
import ProductCard from "./ProductCard";
import useCartContext from "../../hooks/useCartContext";

const BRANDS = ["Louis Vuitton", "Chanel", "Hermes", "Gucci"];
const PRICE_RANGES = [
  { label: "All", value: null },
  { label: "Under 1000", value: [0, 1000] },
  { label: "1000 - 3000", value: [1000, 3000] },
  { label: "3000 - 5000", value: [3000, 5000] },
  { label: "5000+", value: [5000, 100000] },
];
const SIZES = ["XS", "S", "M", "L", "XL"];
const COLORS = [
  { name: "Black", hex: "#000000" },
  { name: "Navy", hex: "#1e3a8a" },
  { name: "Orange", hex: "#f59e0b" },
  { name: "Gray", hex: "#6b7280" },
  { name: "Olive", hex: "#3f6212" },
  { name: "Pink", hex: "#fbcfe8" },
  { name: "Lavender", hex: "#ddd6fe" },
  { name: "Red", hex: "#ef4444" },
  { name: "White", hex: "#ffffff" },
];

const ShopPage = () => {
  const [expanded, setExpanded] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColore, setSeletedColore] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { products, loading, totalPage } = useFetchProducts(
    currentPage,
    priceRange,
    selectedCategory,
    selectedSize,
    selectedColore,
    searchQuery,
    sortOrder,
  );
  const category = useFetchCategories();
  const { addToWishlist, wishlist, removeWishlist } = useCartContext();

  const toggleSection = (section) => {
    setExpanded((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  if (loading) return <div className="">Loading...</div>;

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <section className="bg-[#f3f2ee] py-14">
        <div className="max-w-300 mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-3">Shop</h1>
          <div className="flex items-center gap-2 text-[15px]">
            <button className="text-[#111111] font-sans hover:text-primary transition-colors">
              Home
            </button>
            <span className="text-[#b7b7b7]">&gt;</span>
            <span className="text-[#b7b7b7]">Shop</span>
          </div>
        </div>
      </section>

      <div className="max-w-300 mx-auto px-4 py-24 flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-65 shrink-0">
          {/* Search */}
          <div className="relative mb-14">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setCurrentPage(1);
                setSearchQuery(e.target.value);
              }}
              placeholder="Search..."
              className="w-full border border-[#e5e5e5] rounded-sm py-3 px-5 text-[15px] focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#b7b7b7]"
            />
            <BiSearch className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b7b7b7]" />
          </div>
          {/* Categories */}
          <div className="mb-10">
            <div
              onClick={() => toggleSection("Categories")}
              className=" text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-between cursor-pointer"
            >
              Categories
              <BiChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded.includes("Categories") ? "rotate-180" : ""}`}
              />
            </div>
            <div className="space-y-1">
              {expanded.includes("Categories") && (
                <div className="pb-4">
                  {category.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setCurrentPage(1);
                        setSelectedCategory(cat.id);
                      }}
                      className={`block text-sm transition-colors ${selectedCategory === cat.id ? "text-black font-medium" : "text-neutral-500 hover:text-black"}`}
                    >
                      {cat.name} ({cat.product_count})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Branding */}
          <div className="mb-10">
            <div
              onClick={() => toggleSection("Branding")}
              className=" text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-between cursor-pointer"
            >
              Branding
              <BiChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded.includes("Branding") ? "rotate-180" : ""}`}
              />
            </div>
            <div className="space-y-1">
              {expanded.includes("Branding") && (
                <div className="pb-4">
                  {BRANDS.map((b) => (
                    <a
                      key={b}
                      href="#"
                      className="text-sm text-neutral-500 hover:text-black transition-colors py-1 block"
                    >
                      {b}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Filter Price */}
          <div className="mb-10">
            <div
              onClick={() => toggleSection("Filter Price")}
              className=" text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-between cursor-pointer"
            >
              Filter Price
              <BiChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded.includes("Filter Price") ? "rotate-180" : ""}`}
              />
            </div>
            <div className="space-y-1">
              {expanded.includes("Filter Price") && (
                <div className="pb-4 space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => {
                        setCurrentPage(1); // reset page
                        setPriceRange(range.value);
                      }}
                      className={`block text-sm transition-colors ${
                        priceRange?.[0] === range.value?.[0]
                          ? "text-black font-medium"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Size */}
          <div className="mb-10">
            <div
              onClick={() => toggleSection("Size")}
              className="text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-between cursor-pointer"
            >
              Size
              <BiChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded.includes("Size") ? "rotate-180" : ""}`}
              />
            </div>
            <div className="space-y-1">
              {expanded.includes("Size") && (
                <div className="grid grid-cols-4 gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setCurrentPage(1); // reset page
                        setSelectedSize(size);
                      }}
                      className={`h-10 border text-xs font-medium transition-all ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "border-gray-200 text-gray-600 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Colors */}
          <div className="mb-10">
            <div
              onClick={() => toggleSection("Colors")}
              className=" text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-between cursor-pointer"
            >
              Colors
              <BiChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded.includes("Colors") ? "rotate-180" : ""}`}
              />
            </div>
            {expanded.includes("Colors") && (
              <div className="flex flex-wrap gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setCurrentPage(1);
                      setSeletedColore(color.name);
                    }}
                    style={{ backgroundColor: color.hex }}
                    className={`w-6 h-6 rounded-full border transition-transform hover:scale-110 ${
                      selectedColore === color.name
                        ? "ring-2 ring-black"
                        : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500">
              Showing 1–{products.length} of results
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Sort by Price:</span>
              <select
                className="font-bold bg-transparent border-none focus:ring-0 cursor-pointer outline-none "
                value={sortOrder}
                onChange={(e) => {
                  setCurrentPage(1);
                  setSortOrder(e.target.value);
                }}
              >
                <option value="">Default</option>
                <option value="price">Low to High</option>
                <option value="-price">High to Low</option>
              </select>
            </div>
          </div>
          {/* products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                p={p}
                addToWishlist={addToWishlist}
                wishlist={wishlist}
                removeWishlist={removeWishlist}
              />
            ))}
          </div>
          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">
                No products found matching your criteria.
              </p>
            </div>
          )}
          <Pagination
            handlePageChenge={setCurrentPage}
            currentPage={currentPage}
            totalPage={totalPage}
          />
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
