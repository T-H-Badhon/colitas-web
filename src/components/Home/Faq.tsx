"use client"
import React from "react";
import Collapsible from "react-collapsible";

const Faq = () => {
  const faqs = [
    {
      title: "What is the mission of Colitas?",
      value:
        "Our mission is to raise awareness about the risks of tail docking in dogs and advocate for its prohibition. We strive to educate the public and protect the well-being of dogs everywhere.",
    },
    {
      title: "How can I support Colitas?",
      value:
        "You can support us by becoming a member of our community, participating in our affiliate program, and promoting the importance of tail awareness and pet wellness through social media.",
    },
    {
      title: "What does the affiliate program offer?",
      value:
        "Our affiliate program allows you to help spread our message while enjoying benefits. You can become a silent partner, ambassador, or distributor, each with unique opportunities to support our cause.",
    },
    {
      title: "Why is a dog's tail important?",
      value:
        "A dog's tail is crucial for communication and balance. It serves as an indicator of their mood and emotions, making it essential for their overall well-being and social interactions.",
    },
  ];
  return (
    <div className="my-14 max-w-[580px] mx-auto">
      <div className="mb-5">
        <h5 className="text-orange-400 text-lg font-bold">
          {"//"} <span className="mx-2">faq</span> {"//"}
        </h5>
        <h2 className="text-3xl md:text-6xl font-bold text-[#393d72] flex items-center gap-2">
          Get Every Answer From Here
        </h2>
      </div>

      {faqs.map((faq, index) => {
        return (
          <Collapsible
            key={index}
            trigger={
              <div className="flex items-center gap-4 mt-5 cursor-pointer">
                <div className="text-3xl w-10  h-10 bg-gray-400/30 rounded-lg flex items-center justify-center ">
                  <button className="text-orange-400 relative -top-[4px]">
                    +
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-[#393d72]">
                  {faq.title}
                </h2>
              </div>
            }
          >
            <div className=" pl-2 my-2 space-y-2 text-justify">
              <p>
                {faq.value}
              </p>
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default Faq;
