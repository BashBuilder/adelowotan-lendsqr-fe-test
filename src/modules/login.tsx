"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

interface PageProps {
  setView: React.Dispatch<
    React.SetStateAction<"login" | "signup" | "forgetPassword">
  >;
}

const Login = ({ setView }: PageProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      await login(data.email, data.password);
      router.push("/user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <section className="auth-form-section">
        <div>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className={errors.email ? "auth-error" : ""}
            {...register("email")}
          />
          {errors.email && (
            <span className="auth-error-span">{errors.email.message}</span>
          )}

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
          {errors.password && (
            <span className="auth-error-span">{errors.password.message}</span>
          )}
        </div>

        <button
          type="button"
          className="btn-forget"
          onClick={() => setView("forgetPassword")}
        >
          FORGOT PASSWORD?
        </button>

        <button className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Login"}
        </button>

        <button
          type="button"
          className="btn-switch"
          onClick={() => setView("signup")}
        >
          Don&apos;t have an account? Sign Up
        </button>
      </section>
    </form>
  );
};

export default Login;
