import { users } from "../../../../data/users"; 

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
    }

    return new Response(JSON.stringify({
      token: "dummy-token-123",
      email: user.email,
      role: user.role,
      name: user.name
    }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
