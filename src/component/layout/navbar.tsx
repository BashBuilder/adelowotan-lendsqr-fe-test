"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import "@/styles/component/navbar/navbar.css";

const Navbar = () => {
  const handleToggleSidebar = useCallback(() => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("hidden-sidebar");
      document.body.style.overflow = "hidden";
      if (!sidebar.classList.contains("hidden-sidebar")) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
    }
    //  eslint-disable-next-line
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-sidebar");
    if (
      sidebar &&
      !sidebar.contains(event.target as Node) &&
      toggleButton &&
      !toggleButton.contains(event.target as Node)
    ) {
      sidebar.classList.add("hidden-sidebar");
      document.removeEventListener("click", handleClickOutside);
    }
    document.body.style.overflow = "auto";
  }, []);

  return (
    <header className="navbar-header">
      <Link href={"#"} className="logo">
        <Image
          src="/assets/svg/lendsqr logo.svg"
          alt="sign in image"
          width={145}
          height={30}
          quality={100}
        />
      </Link>

      <form className="search-form">
        <input type="text" placeholder="Search for anything" />
        <button>
          <Image
            src="/assets/svg/icons/search.svg"
            alt="search icon"
            width={16}
            height={16}
            quality={100}
          />
        </button>
      </form>

      <section className="navbar-section">
        <Link href={"#"}>Docs</Link>
        <button>
          <svg width="22" height="25" viewBox="0 0 22 25" fill="none">
            <path
              d="M17.5375 12.9577C17.5554 15.7843 18.6891 18.4901 20.6958 20.485C20.8701 20.6579 20.923 20.9198 20.829 21.1471L20.8286 21.1481C20.7338 21.3737 20.5134 21.5228 20.2658 21.5215M17.5375 12.9577L20.2664 21.3215M17.5375 12.9577V12.8635V10.9309C17.555 9.39419 17.0528 7.89738 16.1124 6.68191C15.2358 5.54884 14.0266 4.72292 12.6584 4.31762C13.1016 3.69022 13.1946 2.86991 12.8861 2.15105L12.886 2.15093C12.5336 1.33111 11.7281 0.8 10.8356 0.8C9.94306 0.8 9.13759 1.33111 8.78511 2.15093L8.78506 2.15105C8.47709 2.86866 8.56922 3.68732 9.01036 4.31428C7.66241 4.69652 6.46509 5.49251 5.59078 6.59454C4.64959 7.77863 4.13765 9.24639 4.13765 10.7591L4.13765 12.8635L4.13765 12.864C4.14463 15.7244 3.00807 18.4681 0.979249 20.4849C0.804911 20.6578 0.751979 20.9198 0.845941 21.1471L0.846378 21.1481C0.941129 21.3737 1.16159 21.5228 1.40913 21.5215M17.5375 12.9577L7.85948 21.5215M20.2658 21.5215C20.2656 21.5215 20.2654 21.5215 20.2652 21.5215L20.2664 21.3215M20.2658 21.5215H20.2664V21.3215M20.2658 21.5215H13.8155M20.2664 21.3215H13.6486M13.8155 21.5215C13.8273 21.4655 13.8376 21.4089 13.8463 21.3517L13.6486 21.3215M13.8155 21.5215C13.5206 22.9216 12.283 23.9367 10.8375 23.9367C9.39199 23.9367 8.15449 22.9216 7.85948 21.5215M13.8155 21.5215H13.6486V21.3215M13.6486 21.3215L7.85948 21.5215M7.85948 21.5215H8.02636V21.3215L7.82866 21.3517C7.83739 21.4089 7.84768 21.4655 7.85948 21.5215ZM7.85948 21.5215H1.40913M1.40913 21.5215C1.40935 21.5215 1.40958 21.5215 1.40981 21.5215L1.40858 21.3215V21.5215H1.40913ZM12.5659 21.5215C12.3121 22.2465 11.6241 22.7465 10.8375 22.7465H10.8374C10.0507 22.7465 9.36279 22.2465 9.10897 21.5215H12.5659ZM5.34973 10.7591L5.34973 10.7588C5.34777 9.2556 5.96218 7.81804 7.04981 6.78156L7.04989 6.78148C8.1372 5.74412 9.60167 5.19926 11.1025 5.27141C12.5333 5.35995 13.875 5.9981 14.8473 7.05075L14.8473 7.05076C15.8208 8.1047 16.3493 9.49197 16.3248 10.9263H16.3247V10.9297L16.3247 12.8628C16.3247 12.8629 16.3247 12.863 16.3247 12.8631C16.316 15.5712 17.2318 18.1963 18.9117 20.309H2.76282C4.44285 18.1963 5.35871 15.5712 5.34973 12.8631L5.34973 10.7591ZM10.8375 2.02152C11.2492 2.02152 11.6211 2.2694 11.779 2.65053C11.936 3.03089 11.8495 3.46896 11.5583 3.76111C11.2662 4.05221 10.8282 4.13879 10.4479 3.98182C10.0667 3.82391 9.81875 3.45204 9.81875 3.04027C9.81875 2.47738 10.2746 2.02152 10.8375 2.02152Z"
              fill="#213F7D"
              stroke="#213F7D"
              strokeWidth="0.4"
            />
          </svg>
        </button>

        <button className="user-dropdown">
          <Image
            src="/assets/images/Adedeji.png"
            alt="user image"
            width={48}
            height={48}
            quality={100}
          />
          <span>
            <span>Adedeju</span>
            <Image
              src="/assets/svg/icons/chevron-down.svg"
              alt="arrow down"
              width={8}
              height={8}
            />
          </span>
        </button>
      </section>

      <button
        className="navbar-menu toggle-sidebar"
        onClick={handleToggleSidebar}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect y="4" width="24" height="2" fill="black" />
          <rect y="11" width="24" height="2" fill="black" />
          <rect y="18" width="24" height="2" fill="black" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
