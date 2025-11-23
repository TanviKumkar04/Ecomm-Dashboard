"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [data, setData] = useState([]);   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products"); 
        const result = await res.json();

        // FIX: Ensure it's an array
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("API ERROR:", error);
        setData([]); // fallback safe value
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
