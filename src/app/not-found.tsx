import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/globals.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="header">
        <h3>You seem lost</h3>
      </div>
      <Link className="go-back" href="/">
        <Image
          src="/assets/svg/icons/arrowback.svg"
          alt="user icon"
          width={20}
          height={20}
        />
        <span>Back home</span>
      </Link>
    </main>
  );
};

export default NotFound;
