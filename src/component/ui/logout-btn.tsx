"use client";

import { clearSession } from "@/services/session";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    toast.success("User logged out successfully.");
    router.push("/");
  };
  return (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutBtn;
