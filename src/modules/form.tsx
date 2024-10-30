"use client";

import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import ForgetPassword from "./forget-password";

const Auth: React.FC = () => {
  const [view, setView] = useState<"login" | "signup" | "forgetPassword">(
    "login"
  );

  return (
    <>
      {view === "login" && <Login setView={setView} />}
      {view === "signup" && <Signup setView={setView} />}
      {view === "forgetPassword" && <ForgetPassword setView={setView} />}
    </>
  );
};

export default Auth;
