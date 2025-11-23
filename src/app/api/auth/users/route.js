import { users } from "../../../data/users"; 
export async function GET() {
  return new Response(JSON.stringify(users), { status: 200 });
}

// POST: register a new user
export async function POST(req) {
  try {
    const { email, password, role, name } = await req.json();
    if (users.some(u => u.email === email)) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password,
      role: role || "user",
      name: name || email.split("@")[0]
    };

    users.push(newUser);

    return new Response(JSON.stringify({ message: "Registration successful", user: newUser }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
