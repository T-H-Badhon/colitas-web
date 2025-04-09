import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Adoption & Donation",
    subtitle: "Find your ideal partner",
    icon: "/assets/frontend/images/mission/mission-1.png",
  },
  {
    title: "Booking with Doctors",
    subtitle: "Schedule your pet's health",
    icon: "/assets/frontend/images/mission/mission-2.png",
  },
  {
    title: "Education & Awareness",
    subtitle: "Find out what's important to them.",
    icon: "/assets/frontend/images/mission/mission-3.png",
  },
  {
    title: "Colitas Community",
    subtitle: "A space to share, learn and support.",
    icon: "/assets/frontend/images/mission/mission-4.png",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[720px] mx-auto px-4">
        <div className="">
          <div className="mb-8">
            <h5 className="text-orange-400 text-lg font-bold">
              {"//"} <span className="mx-2">Mission</span> {"//"}
            </h5>
            <h2 className="text-3xl md:text-5xl font-bold text-[#393d72] flex items-center gap-2">
              Why Choose Us
              <span className="inline-block w-2 h-2 bg-orange-400 rounded-full animate-ping relative top-4" />
            </h2>
          </div>
          <p className="text-[#393d72] mb-8">
            At Colitas, we prioritize the health and happiness of pets. Our mission is to raise awareness about the harmful effects of tail docking and promote responsible pet care. By joining us, you help protect dogs and advocate for better animal welfare practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 transition duration-300">
                <div className="w-14 h-14 flex-shrink-0">
                  <Image src={item.icon} alt={item.title} width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#393d72]">{item.title}</h3>
                  <p className="text-sm text-[#393d72]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
