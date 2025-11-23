let products = [
  { id: "1", title: "Red Shirt", price: 299, description: "Comfortable red shirt.", inventory: 12 },
  { id: "2", title: "Blue Jeans", price: 799, description: "Stylish blue jeans.", inventory: 5 },
  { id: "3", title: "Sneakers", price: 1999, description: "Sporty sneakers.", inventory: 7 }
];

// GET: return all products
export async function GET() {
  return new Response(JSON.stringify(products), { status: 200 });
}

// POST: add a new product
export async function POST(req) {
  try {
    const { title, price, description, inventory } = await req.json();
    const newProduct = {
      id: (products.length + 1).toString(),
      title,
      price,
      description,
      inventory
    };
    products.push(newProduct);
    return new Response(JSON.stringify({ message: "Product added", product: newProduct }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Failed to add product" }), { status: 500 });
  }
}

// DELETE: remove a product by id
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    products = products.filter(p => p.id !== id);
    return new Response(JSON.stringify({ message: "Product removed" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Failed to delete product" }), { status: 500 });
  }
}
