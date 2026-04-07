import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchCategories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    apiClient
      .get("/categories/")
      .then((res) => {
        (setCategory(res.data), console.log(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return category;
};

export default useFetchCategories;
