"use client";
import React from "react";
import { toast } from "react-toastify";

const Blacklist = () => {
  const notify = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000, // auto-close after 5 seconds
    });
  };

  return (
    <button className="blacklist" onClick={() => notify("User blacklisted")}>
      BLACKLIST USER
    </button>
  );
};

export default Blacklist;
