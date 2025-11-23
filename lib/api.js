export const API_URL = "http://localhost:4000";

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
  const data = await res.json();
  return data.length ? data[0] : null;
}
