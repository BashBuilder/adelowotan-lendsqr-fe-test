import type { Metadata } from "next";
import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkSan = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lendsqr test",
  description: "A dashboard replica text for lendsqr by Adelowotan Anthony",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${WorkSan.className}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
