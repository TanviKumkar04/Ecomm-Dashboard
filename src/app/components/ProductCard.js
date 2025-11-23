"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { token } = useSelector((state) => state.auth); // check if user logged in
  const router = useRouter();

  const handleShop = () => {
    if (!token) {
      router.push("/auth"); // redirect to login if not logged in
      return;
    }

    // redirect to Cart page (pass product id or full product)
    router.push(`/cart?productId=${product.id}`);
  };

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover rounded mb-2"
      />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-600">₹ {product.price}</p>
      <button
        onClick={handleShop}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Shop
      </button>
    </div>
  );
}
