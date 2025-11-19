"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchProducts } from "@/redux/slices/productsSlice";
import Loader from "@/components/Loader";
import Link from "next/link";

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Products</h1>

      <div className="grid grid-cols-3 gap-4">
        {items.map((p: any) => (
          <Link
            href={`/products/${p.id}`}
            key={p.id}
            className="border p-4 shadow rounded-lg cursor-pointer"
          >
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-500">₹{p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
