import React, { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSidebar from "../components/Cart/CartSidebar";

const Cart = () => {
  const {
    cart,
    loading,
    cartId,
    createOrGetCart,
    updateCartItemQuantity,
    deleteCartItems,
  } = useCartContext();

  const [localCart, setLocalCart] = useState(cart);
  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!localCart) return <p>No cart Found..</p>;

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; //store cart
    setLocalCart((prevLocalCart) => {
      const updatedItemes = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              total_price: item.product.price * newQuantity,
            }
          : item,
      );

      return {
        ...prevLocalCart,
        items: updatedItemes,
        total_price: updatedItemes.reduce(
          (sum, item) => sum + item.total_price,
          0,
        ),
      };
    });
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy);
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLocalCart((prevLocalCart) => {
      const updatedItmes = prevLocalCart.items.filter(
        (item) => item.id !== itemId,
      );
      return {
        ...prevLocalCart,
        items: updatedItmes,
        total_price: updatedItmes.reduce(
          (sum, item) => sum + item.total_price,
          0,
        ),
      };
    });

    try {
      await deleteCartItems(itemId);
      await createOrGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-white text-[#141414] font-sans p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Cart Section */}
            <div className="grow">
              <div className="grid grid-cols-[2fr_1fr_1fr_40px] gap-4 pb-6 border-bottom border-black/10 text-[11px] uppercase tracking-widest font-bold text-black">
                <div>Product</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>
              <Suspense fallback={<p>Loading...</p>}>
                <CartItemList
                  items={localCart?.items}
                  handleUpdateQuantity={handleUpdateQuantity}
                  handleRemoveItem={handleRemoveItem}
                />
              </Suspense>
            </div>
            <div className="w-full lg:w-95 space-y-8">
              <CartSidebar
                cartId={cartId}
                totalPrice={localCart.total_price}
                itemsCount={localCart.items.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
