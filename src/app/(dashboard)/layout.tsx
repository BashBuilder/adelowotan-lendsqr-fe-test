import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/component/layout/navbar";
import Sidebar from "@/component/layout/sidebar";

export const metadata: Metadata = {
  title: "Lendsqr dashboard ",
  description: "The test dashboard page",
};

export default function RootLayout({}: // children,
Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        {/* <main className="content-display">{children}</main> */}
      </body>
    </html>
  );
}
