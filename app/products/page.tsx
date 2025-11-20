"use client";

import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  desc: string;
  img: string;
  rating?: number;
};

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Slim Laptop Pro",
    price: 54999,
    desc: "Powerful performance, sleek design.",
    img: "/images/laptop.jpeg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone X",
    price: 24999,
    desc: "Brilliant display, long battery life.",
    img: "/images/phone.jpeg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 1999,
    desc: "Immersive sound with noise cancellation.",
    img: "/images/earbuds.jpeg",
    rating: 4.1,
  },
  {
    id: 4,
    name: "Classic Backpack",
    price: 1299,
    desc: "Durable and roomy for daily use.",
    img: "/images/bag.jpeg",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Smartwatch Lite",
    price: 5999,
    desc: "Track your fitness & notifications.",
    img: "/images/watch.jpeg",
    rating: 4.0,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 3499,
    desc: "Portable sound with deep bass.",
    img: "/images/speaker.jpeg",
    rating: 4.4,
  },
];

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            <div className="relative h-48 bg-gray-100">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{p.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">
                  ₹{p.price.toLocaleString()}
                </span>

                <Link
                  href={`/products/${p.id}`}
                  className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
                >
                  View
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
