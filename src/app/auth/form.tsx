"use client";
import React, { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveDataLocally, isUserExists } from "./actions"; // Import the actions
import { useRouter } from "next/navigation";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type AuthSchemaType = z.infer<typeof authSchema>;

const AuthForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isResetPasswordLink, setIsResetPasswordLink] = useState({
    state: false,
    email: "",
  });
  const router = useRouter();
  const gotoPage = (link: string) => router.push(link);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchemaType>({ resolver: zodResolver(authSchema) });

  const onSubmit: SubmitHandler<AuthSchemaType> = async (data) => {
    try {
      const userExists = await isUserExists(data.email);

      if (isForgotPassword) {
        if (!userExists) {
          alert("User not found. Please sign up.");
          return;
        }
        setIsResetPasswordLink({ state: true, email: data.email });
        return;
      }
      if (isSignup) {
        if (userExists) {
          alert("User already exists. Please login.");
          return;
        }
      } else {
        if (!userExists) {
          alert("User not found. Please sign up.");
          return;
        }
      }
      await saveDataLocally(data, isSignup ? "signup" : "login");
      gotoPage("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing your request.");
    }
  };

  const handlePasswordReset = async (data: AuthSchemaType) => {
    // Reset password directly in local storage
    await saveDataLocally(
      { email: isResetPasswordLink.email, password: data.password },
      "reset"
    );
    alert(
      "Password reset successfully. You can now login with your new password."
    );
    setIsForgotPassword(false);
    setIsResetPasswordLink({ state: false, email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit(
        isResetPasswordLink.state ? handlePasswordReset : onSubmit
      )}
    >
      <section>
        {/* Auth Heading */}
        <div>
          <h2>
            {isForgotPassword
              ? isResetPasswordLink.state
                ? "Set New Password"
                : "Reset Password"
              : isSignup
              ? "Sign Up"
              : "Welcome!"}
          </h2>
          <p>
            {isForgotPassword
              ? isResetPasswordLink.state
                ? "Enter your new password below."
                : "Enter your email to reset password."
              : isSignup
              ? "Create your account."
              : "Enter details to login."}
          </p>
        </div>

        {/* Auth Form Section */}
        <div>
          {/* Email (shown only if not in the second step of reset password) */}
          {!isResetPasswordLink.state && (
            <input
              type="email"
              placeholder="Email"
              className={errors.email ? "auth-error" : ""}
              {...register("email")}
            />
          )}
          {errors.email && (
            <span className="auth-error-span">{errors.email.message}</span>
          )}

          {/* Password (shown in all cases except for the first step of reset password) */}
          {(isResetPasswordLink.state || !isForgotPassword) && (
            <div className="password-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                className={errors.password ? "auth-error" : ""}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? "HIDE" : "SHOW"}
              </button>
            </div>
          )}
          {errors.password && (
            <span className="auth-error-span">{errors.password.message}</span>
          )}
        </div>

        {/* Conditional buttons */}
        {!isForgotPassword && (
          <button
            type="button"
            className="btn-forget"
            onClick={() => setIsForgotPassword(true)}
          >
            FORGOT PASSWORD?
          </button>
        )}

        <button className="btn-submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Submitting..."
            : isForgotPassword
            ? isResetPasswordLink.state
              ? "Set New Password"
              : "Reset Password"
            : isSignup
            ? "Sign Up"
            : "Login"}
        </button>

        {!isForgotPassword && (
          <button
            type="button"
            className="btn-switch"
            onClick={() => setIsSignup((prev) => !prev)}
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        )}
      </section>
    </form>
  );
};

export default AuthForm;
