"use client";
import React, { useState } from "react";

const AuthForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form>
      <section>
        <div>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>

        <div>
          <input type="email" placeholder="Email" />
          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>

        <button type="button" className="btn-forget">
          FORGOT PASSWORD?
        </button>
        <button className="btn-submit">Login</button>
      </section>
    </form>
  );
};

export default AuthForm;
