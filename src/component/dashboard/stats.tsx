import { statsData } from "@/data/constants";
import Image from "next/image";
import React from "react";

const Stats: React.FC = () => {
  return (
    <article className="stats">
      {statsData.map(({ color, iconSrc, label, value, altText }, index) => (
        <div key={index} className="stat-container">
          <span data-color={color} aria-hidden="true">
            <Image src={iconSrc} alt={altText} width={24} height={24} />
          </span>
          <p>{label}</p>
          <h3>{value.toLocaleString()}</h3>
        </div>
      ))}
    </article>
  );
};

export default Stats;
