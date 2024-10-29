import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/component/dashboard/dashboard.css";

const NotFound = () => {
  return (
    <main className="user-details-page">
      <Link className="go-back" href="/">
        <Image
          src="/assets/svg/icons/arrowback.svg"
          alt="user icon"
          width={20}
          height={20}
        />
        <span>Back to Users</span>
      </Link>

      <div className="header">
        <h3>You seem lost</h3>
      </div>
    </main>
  );
};

export default NotFound;
