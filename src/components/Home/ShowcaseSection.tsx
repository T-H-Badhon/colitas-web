import Image from "next/image";
import React from "react";

const showcaseData = [
  {
    src: "/assets/frontend/images/resources/showcase-1.jpg",
    alt: "showcase-1",
    caption: "Be Connected",
  },
  {
    src: "/assets/frontend/images/resources/showcase-2.jpg",
    alt: "showcase-2",
    caption: "Let's Educate Together",
  },
  {
    src: "/assets/frontend/images/resources/showcase-3.jpg",
    alt: "showcase-3",
    caption: "Give more than only hope",
  },
];

const ShowcaseSection = () => {
  return (
    <section id="photo-showcase" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showcaseData.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                width={500}
                height={500}
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover"
              />
              <p className="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow-md">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
