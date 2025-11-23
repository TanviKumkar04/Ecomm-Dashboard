"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/slice/cartSlice"; // we'll create cartSlice

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token } = useSelector((state) => state.auth); // check login
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!token) {
      alert("Please login to add items to cart.");
      router.push("/auth");
      return;
    }

    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  if (loading) return <p className="p-10">Loading...</p>;
  if (!product?.id) return <p className="p-10">Product not found.</p>;

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">Price: ₹{product.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
