"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signup } from "@/services/auth";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      await signup(data);
      router.push("/user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <section className="auth-form-section">
        <div>
          <h2>Sign up</h2>
          <p>Create your account</p>
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
          {isSubmitting ? "Submitting..." : "Signup"}
        </button>

        <button
          type="button"
          className="btn-switch"
          onClick={() => setView("login")}
        >
          Already have an account? Login
        </button>
      </section>
    </form>
  );
};

export default Login;
