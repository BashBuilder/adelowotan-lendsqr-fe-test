import { toast } from "react-toastify";
import { createSession } from "./session";

interface User {
  email: string;
  password: string;
}

export function signup(user: User) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userExists = users.some((u: User) => u.email === user.email);

  if (userExists) {
    toast.error("User already exists");
    throw new Error("User already exists");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  createSession(user.email);
  toast.success("User registered successfully");
}

export async function login(email: string, password: string) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(
    (u: { email: string; password: string }) =>
      u.email === email && u.password === password
  );

  if (!user) {
    toast.error("Invalid email or password");
    throw new Error("Invalid email or password");
  }
  localStorage.setItem("currentUser", JSON.stringify(user));
  createSession(user.email);
  toast.success("Logged in successfully");
}

export async function isUserExists(email: string): Promise<boolean> {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.some((u: { email: string }) => u.email === email);
}

export function resetPassword(email: string, newPassword: string) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex(
    (u: { email: string }) => u.email === email
  );

  if (userIndex === -1) {
    toast.error("User not found");
    throw new Error("User not found");
  }

  users[userIndex].password = newPassword;
  localStorage.setItem("users", JSON.stringify(users));
  toast.success("Password reset successfully! Login to continue");
}
