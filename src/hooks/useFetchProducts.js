import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (
  currentPage,
  priceRange,
  selectedCategory,
  selectedSize,
  selectedColore,
  searchQuery,
  sortOrder,
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `/products/?page=${currentPage}`;
        if (priceRange) {
          url += `&price__gt=${priceRange[0]}&price__lt=${priceRange[1]}`;
        }
        if (selectedCategory) {
          url += `&category_id=${selectedCategory}`;
        }
        if (selectedSize) {
          url += `&size=${selectedSize}`;
        }
        if (selectedColore) {
          url += `&color=${selectedColore}`;
        }
        if (searchQuery) {
          url += `&search=${searchQuery}`;
        }
        if(sortOrder){
          url+=`&ordering=${sortOrder}`
        }

        const response = await apiClient.get(url);
        const data = await response.data;
        setProducts(data.results);
        if (currentPage === 1) {
          const pageSize = data.results.length;
          setTotalPage(Math.ceil(data.count / pageSize));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, priceRange, selectedCategory, selectedSize, selectedColore,searchQuery,sortOrder]);

  return { products, loading, totalPage };
};

export default useFetchProducts;
