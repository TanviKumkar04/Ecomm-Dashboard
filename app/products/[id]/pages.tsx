"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader";

export default function ProductDetail({ params }: any) {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  if (!product) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2">Price: ₹{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
