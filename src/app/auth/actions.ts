// actions.ts

import { createSession } from "@/services/session";
import { toast } from "react-toastify";

// Function to save data in local storage
export const saveDataLocally = (
  data: UserData,
  action: "signup" | "login" | "reset"
) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (action === "signup") {
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    createSession(data.email);
    toast.success("User signed up successfully!");
    return;
  }

  if (action === "login") {
    createSession(data.email);
    toast.success("User logged in successfully!");
    return;
  }

  if (action === "reset") {
    const updatedUsers = users.map((user: UserData) =>
      user.email === data.email ? { ...user, password: data.password } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
};

// Function to check if user exists in local storage by email
export const isUserExists = async (email: string): Promise<boolean> => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.some((user: UserData) => user.email === email);
};
