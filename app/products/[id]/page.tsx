"use client";

import { useParams } from "next/navigation";
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

export default function ProductDetails() {
  const { id } = useParams();

  const product = sampleProducts.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <main className="p-6">
      <Link href="/products" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {product.rating && (
            <p className="text-yellow-600 font-medium">
              ⭐ {product.rating} / 5
            </p>
          )}

          <p className="text-gray-700">{product.desc}</p>

          <p className="text-2xl font-semibold text-gray-900">
            ₹{product.price.toLocaleString()}
          </p>

          <button className="bg-blue-600 text-white px-5 py-2 rounded mt-2 hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
