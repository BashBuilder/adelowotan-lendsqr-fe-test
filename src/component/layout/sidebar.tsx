"use client";
import React from "react";
import "@/styles/component/Sidebar/sidebar.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { sidebarLinks } from "@/data/constants";
import { clearSession } from "@/services/session";
import { toast } from "react-toastify";

const Sidebar = () => {
  const pathname = usePathname();

  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    toast.success("User logged out");
    router.push("/");
  };

  return (
    <aside className="sidebar hidden-sidebar">
      <section className="sidebar-section">
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
            {/* <Image
              src="/assets/svg/icons/chevron-down.svg"
              alt="arrow down"
              width={8}
              height={8}
            /> */}
          </span>
        </button>
      </section>

      <button className="sidebar-switch">
        <Image
          src="/assets/svg/icons/briefcase 1.svg"
          alt="breifcase"
          width={16}
          height={16}
        />
        <span>Switch Organization</span>
        <Image
          src="/assets/svg/icons/arrow-down.svg"
          alt="arrow-down"
          width={12}
          height={12}
        />
      </button>

      <div className="sidebar-dashboard">
        <Image
          src="/assets/svg/icons/home 1.svg"
          alt="home icon"
          width={16}
          height={16}
          className=""
        />
        <p>Dashboard</p>
      </div>

      <nav>
        {sidebarLinks.map((link, index) => (
          <div key={index}>
            <h3>{link.heading}</h3>
            <ul>
              {link.links.map((subLink, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subLink.href}
                    className={
                      pathname === subLink.href ? "active-sidebar-link" : ""
                    }
                  >
                    <Image
                      src={subLink.icon}
                      alt={subLink.label}
                      width={16}
                      height={16}
                    />
                    <span>{subLink.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <hr className="sidebar-divider" />
        <button onClick={handleLogout}>
          <Image
            src="/assets/svg/icons/sign-out 1.svg"
            alt="signout"
            width={16}
            height={16}
          />
          <span>Logout</span>
        </button>
        <p>v1.2.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;
