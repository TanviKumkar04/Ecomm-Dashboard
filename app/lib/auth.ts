export function getUser() {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("user") || "null");
}

export function loginUser(user: any) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("user");
}

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("user");
}
