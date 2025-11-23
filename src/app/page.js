"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products);
    }
    loadProducts();
  }, []);

  return (
    <main className="w-full">

      {/* HERO BANNER */}
      <section className="bg-teal-500 text-white py-24">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

          {/* Left text */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome to MY E-COMM DASHBOARD</h1>
          </div>

          {/* Right Image */}
          <img
            src="/images/tshirt.png"
            alt="Hero Shirt"
            className="w-60 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-14 bg-white">
        <h2 className="text-center text-xl font-semibold mb-12">Featured Categories</h2>

        <div className="flex gap-10 justify-center flex-wrap px-6">

          {products.map((item) => (
            <div key={item.id} className="text-center shadow-md p-4 rounded-lg border w-40">
              <img src={item.image} className="w-24 mx-auto mb-3" alt={item.title} />
              <p className="text-sm font-semibold mb-2">{item.title}</p>
              <button className="bg-teal-500 text-white px-4 py-1 rounded text-sm">
                SHOP
              </button>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
