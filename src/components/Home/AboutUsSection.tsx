import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[570px] mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <div className="space-y-6">
              <div className="mb-6">
                <h5 className="text-lg font-bold text-orange-500">
                  {"//"}
                  <span className="mx-3">About Us</span> {"//"}
                </h5>
                  <h2 className="text-3xl md:text-7xl font-bold text-gray-900  px-0 mx-0">
                    Colitas Mission and Key Focus <span className="rounded-full  text-xs aspect-square bg-orange-500 animate-ping "><span className="invisible">gg</span></span>
                  </h2>
              </div>
              <div className="text-gray-700 text-base leading-relaxed">
                <p>
                  <strong className="text-black">At Colitas,</strong> we are
                  dedicated to raising awareness about the significance of a
                  dog’s tail in communication and balance. Our mission is to
                  educate the public on the harmful practice of tail docking and
                  advocate for its complete prohibition. Through community
                  engagement, social media, and informative content, we aim to
                  create a world where all dogs are treated with the respect and
                  care they deserve.
                </p>
              </div>
              <div className="text-center ">
                <a
                  href="lang/es.html#"
                  className="flex items-center mx-auto gap-3 w-fit bg-lime-500 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
                >
                  <FaPhoneAlt/>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
