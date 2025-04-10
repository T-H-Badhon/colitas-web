import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Easy login/sign up",
    subtitle: "Find your ideal partner",
    icon: "/assets/frontend/images/pet-caring/pet-caring-1.webp",
  },
  {
    title: "Booking with Doctors",
    subtitle: "Schedule your pet's health",
    icon: "/assets/frontend/images/pet-caring/pet-caring-2.webp",
  },
  {
    title: "Adoption",
    subtitle: "Find out what's important to them.",
    icon: "/assets/frontend/images/pet-caring/pet-caring-3.webp",
  },
  {
    title: "Social Media Platform",
    subtitle: "A space to share, learn and support.",
    icon: "/assets/frontend/images/pet-caring/pet-caring-4.webp",
  },
  {
    title: "Donation",
    subtitle: "A space to share, learn and support.",
    icon: "/assets/frontend/images/pet-caring/pet-caring-5.webp",
  },
  {
    title: "Marketplace for Pet Products",
    subtitle: "A space to share, learn and support.",
    icon: "/assets/frontend/images/pet-caring/pet-caring-6.webp",
  },
];

const AppFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[720px] mx-auto px-4">
        <div className="">
          <div className="mb-8">
            <h5 className="text-orange-400 text-lg font-bold">
              {"//"} <span className="mx-2">Features</span> {"//"}
            </h5>
            <h2 className="text-3xl md:text-6xl font-bold text-[#393d72]">
            Colitas brings you what matters most: caring for pets
              <span className="inline-block w-2 h-2 bg-orange-400 rounded-full animate-ping relative top-0 -right-2" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 transition duration-300">
                <div className="w-14 h-14 flex-shrink-0">
                  <Image src={item.icon} alt={item.title} width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-sm text-[#393d72]">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
