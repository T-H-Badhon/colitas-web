import Image from "next/image";
import React from "react";

const logos = [
  "/assets/frontend/images/logos/1.webp",
  "/assets/frontend/images/logos/2.webp",
  "/assets/frontend/images/logos/3.webp",
  "/assets/frontend/images/logos/4.webp",
  "/assets/frontend/images/logos/5.webp",
  "/assets/frontend/images/logos/6.webp",
  "/assets/frontend/images/logos/7.webp",
];

const LogoMarquee = () => {
  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="whitespace-nowrap relative flex gap-8 animate-marquee">
        {[...logos, ...logos].map((logo, idx) => (
          <Image
            width={100}
            height={100}
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
