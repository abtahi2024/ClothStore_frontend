import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  // const [authToken] = useState(
  //   () => JSON.parse(localStorage.getItem("authTokens"))?.access,
  // );

  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // 🔥 full cart reload
  const fetchCart = async () => {
    const res = await authApiClient.get(`/carts/${cartId}/`);
    setCart(res.data);
  };

  // create carts
  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/carts/");
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
      return response.data.id;
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  }, [cartId]);
  // add items
  const AddCartItems = useCallback(
    async (product_id, quantity) => {
      setLoading(true);
      let id = cartId;
      if (!id) {
        id = await createOrGetCart();
      }
      try {
        const response = await authApiClient.post(`/carts/${id}/items/`, {
          product_id,
          quantity,
        });

        fetchCart();
        return response.data;
      } catch (error) {
        console.log("Error adding items", error);
      } finally {
        setLoading(false);
      }
    },
    [cartId, createOrGetCart],
  );

  // Update item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      setLoading(true);
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
          quantity,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [cartId],
  );

  // Remove cart
  const deleteCartItems = useCallback(
    async (itemId) => {
      try {
        await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        fetchCart();
      } catch (error) {
        console.log(error);
      }
    },
    [cartId],
  );
  // get wishlist
  const fetchWishlist = useCallback(async () => {
    try {
      const response = await authApiClient.get("/wishlist/");
      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  // add to wish list
  const addToWishlist = useCallback(
    async (product_id) => {
      try {
        const response = await authApiClient.post("/wishlist/", { product_id });
        fetchWishlist();
        return response.data;
      } catch (error) {
        console.log(error.response?.data);
      }
    },
    [fetchWishlist],
  );
  // Wishlist Remove
  const removeWishlist = useCallback(async (wishlistId) => {
    try {
      await authApiClient.delete(`/wishlist/${wishlistId}/`);
      fetchWishlist();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const initalizeCart = async () => {
      setLoading(true);
      await createOrGetCart();
      setLoading(false);
    };
    initalizeCart();
  }, [createOrGetCart]);
  return {
    cart,
    loading,
    cartId,
    wishlist,
    createOrGetCart,
    AddCartItems,
    updateCartItemQuantity,
    deleteCartItems,
    addToWishlist,
    fetchWishlist,
    removeWishlist,
  };
};

export default useCart;
