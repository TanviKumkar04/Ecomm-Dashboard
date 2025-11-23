"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]); // initialize as empty array

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products"); // your API route
        const data = await res.json();

        // If your API returns { products: [...] }, use data.products
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]); // fallback to empty array
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

      <div className="flex gap-10 justify-center flex-wrap px-6">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((item) => (
            <div
              key={item.id}
              className="text-center shadow-md p-4 rounded-lg border w-40"
            >
              <img
                src={item.image}
                className="w-24 mx-auto mb-3"
                alt={item.title}
              />
              <p className="text-sm font-semibold mb-2">{item.title}</p>
              <p className="text-sm">₹{item.price || "N/A"}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
