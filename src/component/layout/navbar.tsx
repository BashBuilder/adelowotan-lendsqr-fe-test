import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/component/navbar/navbar.css";

const Navbar = () => {
  return (
    <header>
      <Link href={"#"} className="logo">
        <Image
          src="/assets/svg/lendsqr logo.svg"
          alt="sign in image"
          width={145}
          height={30}
          quality={100}
        />
      </Link>

      <form>
        <input type="text" placeholder="Search for anything" />
        <button>
          <Image
            src="/assets/images/search.png"
            alt="search icon"
            width={16}
            height={16}
            quality={100}
          />
        </button>
      </form>

      <section>
        <a href={"#"}>Docs</a>
        <button>
          <Image
            src="/assets/images/bell.png"
            alt="sign in image"
            width={24}
            height={24}
            quality={100}
          />
        </button>
        <button className="user-dropdown">
          <Image
            src="/assets/images/Adedeji.png"
            alt="user image"
            width={32}
            height={32}
            quality={100}
          />
          <span>
            <span>Adedeju</span>
            <Image
              src="/assets/images/arrow-down.png"
              alt="user image"
              width={8}
              height={8}
            />
          </span>
        </button>
      </section>
    </header>
  );
};

export default Navbar;
