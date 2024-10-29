"use client";

import React from "react";
import { toast } from "react-toastify";

const Activate = () => {
  const notify = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000, // auto-close after 5 seconds
    });
  };

  return (
    <button
      className="activate"
      onClick={() => notify("User activated successfully")}
    >
      ACTIVATE USER
    </button>
  );
};

export default Activate;
