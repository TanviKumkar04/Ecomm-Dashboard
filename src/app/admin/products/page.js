    "use client";

import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [inventory, setInventory] = useState("");

  const loadProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProducts();
  }, []);

  const handleAdd = async () => {
    if (!title || !price) return alert("Title and Price are required");

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price: Number(price), description, inventory: Number(inventory) || 0 }),
    });
    setTitle("");
    setPrice("");
    setDescription("");
    setInventory("");
    loadProducts();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    loadProducts();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Product Management</h1>

      <div className="mb-6">
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 mr-2 rounded" />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 mr-2 rounded" />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 mr-2 rounded" />
        <input placeholder="Inventory" value={inventory} onChange={e => setInventory(e.target.value)} className="border p-2 mr-2 rounded" />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">Add Product</button>
      </div>

      <ul>
        {products.map(p => (
          <li key={p.id} className="flex justify-between border p-2 mb-2 rounded">
            <span>{p.title} - ₹{p.price}</span>
            <button onClick={() => handleDelete(p.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
