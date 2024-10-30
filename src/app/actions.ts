import { createSession } from "@/services/session";
import { toast } from "react-toastify";

interface UserData {
  email: string;
  password: string;
}

// Function to save data in local storage
export const saveDataLocally = (
  data: UserData,
  action: "signup" | "login" | "reset"
): void => {
  const users: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");

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
    const updatedUsers = users.map((user) =>
      user.email === data.email ? { ...user, password: data.password } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
};

// Function to check if user exists in local storage by email
export const isUserExists = async (email: string): Promise<boolean> => {
  const users: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");
  return users.some((user) => user.email === email);
};

// Function to validate password for a given email
export const isCorrectPassword = async (
  email: string,
  password: string
): Promise<boolean> => {
  const users: UserData[] = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((user) => user.email === email);
  return user ? user.password === password : false;
};
