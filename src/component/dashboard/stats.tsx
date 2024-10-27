import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <article className="stats">
      <div className="stat-container">
        <span data-color="#DF18FF">
          <Image
            src="/assets/svg/icons/users.svg"
            alt="users"
            width={24}
            height={24}
          />
        </span>
        <p>Users</p>
        <h3>2,453</h3>
      </div>
      <div className="stat-container">
        <span data-color="#5718FF">
          <Image
            src="/assets/svg/icons/Group user.svg"
            alt="users"
            width={24}
            height={24}
          />
        </span>
        <p>Active Users</p>
        <h3>2,453</h3>
      </div>
      <div className="stat-container">
        <span data-color="#F55F44">
          <Image
            src="/assets/svg/icons/Group data.svg"
            alt="users"
            width={24}
            height={24}
          />
        </span>
        <p>Users with Loans</p>
        <h3>12,453</h3>
      </div>
      <div className="stat-container">
        <span data-color="#FF3366">
          <Image
            src="/assets/svg/icons/Group coin.svg"
            alt="users"
            width={24}
            height={24}
          />
        </span>
        <p>Users with Savings</p>
        <h3>102,453</h3>
      </div>
    </article>
  );
};

export default Stats;
