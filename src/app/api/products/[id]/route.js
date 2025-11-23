import { products } from "../route"; // import the same array

export async function GET(req, { params }) {
  const id = parseInt(params.id); // ensure numeric comparison
  const product = products.find((p) => p.id === id);

  if (!product) {
    return new Response(JSON.stringify({ message: "Product not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}
