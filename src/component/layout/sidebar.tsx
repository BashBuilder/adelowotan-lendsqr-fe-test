"use client";
import React from "react";
import "@/styles/component/Sidebar/sidebar.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    heading: "CUSTOMERS",
    links: [
      {
        label: "Users",
        href: "/",
        icon: "/assets/svg/icons/user-friends 1.svg",
      },
      {
        label: "Guarantors",
        href: "#",
        icon: "/assets/svg/icons/users 1.svg",
      },
      {
        label: "Loans",
        href: "#",
        icon: "/assets/svg/icons/sack 1.svg",
      },
      {
        label: "Decision Models",
        href: "#",
        icon: "/assets/svg/icons/handshake-regular 1.svg",
      },
      {
        label: "Savings",
        href: "#",
        icon: "/assets/svg/icons/piggy-bank 1.svg",
      },
      {
        label: "Loan Requests",
        href: "#",
        icon: "/assets/svg/icons/hand money.svg",
      },
      {
        label: "Whitelist",
        href: "#",
        icon: "/assets/svg/icons/user-check 1.svg",
      },
      {
        label: "Karma",
        href: "#",
        icon: "/assets/svg/icons/user-times 1.svg",
      },
    ],
  },
  {
    heading: "BUSINESSES",
    links: [
      {
        label: "Users",
        href: "/",
        icon: "/assets/svg/icons/user-friends 1.svg",
      },
      {
        label: "Guarantors",
        href: "#",
        icon: "/assets/svg/icons/users 1.svg",
      },
      {
        label: "Loans",
        href: "#",
        icon: "/assets/svg/icons/sack 1.svg",
      },
      {
        label: "Decision Models",
        href: "#",
        icon: "/assets/svg/icons/handshake-regular 1.svg",
      },
      {
        label: "Savings",
        href: "#",
        icon: "/assets/svg/icons/piggy-bank 1.svg",
      },
      {
        label: "Loan Requests",
        href: "#",
        icon: "/assets/svg/icons/hand money.svg",
      },
      {
        label: "Whitelist",
        href: "#",
        icon: "/assets/svg/icons/user-check 1.svg",
      },
      {
        label: "Karma",
        href: "#",
        icon: "/assets/svg/icons/user-times 1.svg",
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      <button>
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
          width={14}
          height={14}
        />
      </button>

      <div className="dashboard">
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
                    className={pathname === subLink.href ? "active" : ""}
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
    </aside>
  );
};

export default Sidebar;
