"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { isUserExists, resetPassword } from "@/services/auth";
// import { login } from "./login";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

interface PageProps {
  setView: React.Dispatch<
    React.SetStateAction<"login" | "signup" | "forgetPassword">
  >;
}

const Login = ({ setView }: PageProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      await resetPassword(data.email, data.password);
      setView("login");
    } catch (error) {
      console.error(error);
      toast.warning("An error occurred while processing your request.");
    }
  };

  const handleVerifyEmail = async () => {
    const user = await isUserExists(watch("email"));
    if (user) {
      setIsEmailConfirmed(true);
      return;
    }
    toast.error("Email not found. Please check your email address.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <section className="auth-form-section">
        <div>
          <h2>{isEmailConfirmed ? "Set New Password" : "Reset Password"}</h2>
          <p>
            {isEmailConfirmed
              ? "Enter your new password below."
              : "Enter your email to reset password."}
          </p>
        </div>

        <div>
          {!isEmailConfirmed && (
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

          {isEmailConfirmed && (
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

        {isEmailConfirmed ? (
          <button
            className="btn-submit"
            disabled={isSubmitting || !isEmailConfirmed}
          >
            {isSubmitting ? "Submitting..." : "Set new password"}
          </button>
        ) : (
          <div
            className="btn-submit align-items-center"
            onClick={() => handleVerifyEmail()}
          >
            Reset password
          </div>
        )}

        <button
          type="button"
          className="btn-switch"
          onClick={() => setView("login")}
        >
          Remember your password? Login
        </button>
      </section>
    </form>
  );
};

export default Login;
