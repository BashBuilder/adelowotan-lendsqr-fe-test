"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import "@/styles/component/navbar/navbar.css";
import SearchForm from "../ui/search-form";
import Popup from "reactjs-popup";
import LogoutBtn from "../ui/logout-btn";

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

      <SearchForm />

      <section className="navbar-section">
        <Link href={"#"}>Docs</Link>
        <button>
          <Image
            src="/assets/svg/icons/bell.png"
            alt="sign in image"
            width={24}
            height={24}
            quality={100}
          />
        </button>

        <Popup
          trigger={
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
          }
          position="bottom left"
          arrow={false}
        >
          <LogoutBtn />
        </Popup>
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
