"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../store/slice/cartSlice";

export default function CartPage() {
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth); // get logged-in user
  const dispatch = useDispatch();

  // If no user is logged in
  if (!user) return <p className="p-10">Please login to see your cart.</p>;

  // Admin view
  if (user.role === "admin") {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        <p>Admins do not have a shopping cart. You can manage products instead.</p>
      </div>
    );
  }

  // User view
  if (items.length === 0) return <p className="p-10">Your cart is empty.</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>Price: ₹{item.price}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(clearCart())}
        className="mt-6 bg-gray-700 text-white px-6 py-2 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
}
