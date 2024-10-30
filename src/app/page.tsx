import React from "react";
import "@/styles/component/Auth/auth.css";
import Image from "next/image";
import AuthForm from "../modules/form";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;

  if (authToken) {
    redirect("/user");
  }

  return (
    <main className="auth-page">
      <Link href={"#"} className="logo">
        <Image
          src="/assets/svg/lendsqr logo.svg"
          alt="sign in image"
          width={150}
          height={36}
          quality={100}
        />
      </Link>
      <section className="auth-image-container">
        <Image
          src="/assets/svg/pablo-sign-in 1.svg"
          alt="sign in image"
          width={600}
          height={350}
          quality={100}
        />
      </section>
      <AuthForm />
    </main>
  );
};

export default AuthPage;
