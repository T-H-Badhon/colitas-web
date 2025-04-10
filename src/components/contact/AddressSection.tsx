import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const AddressSection = () => {
  return (
    <section className="contact-info-area style3 py-24 " id="address">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center aspect-square bg-white p-6 rounded-lg card-shadow-full">
            <div className="h-1/3">
              <MdOutlineEmail className="text-7xl text-orange-400" />
            </div>
            <div className="title mt-4">
              <h2 className="text-3xl mb-2 font-bold text-[#393D72]">
                Email address
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full ml-2 animate-ping"></span>
              </h2>
            </div>
            <Link
              href={"mailto:info@colitas.io"}
              className="font-semibold text-lg"
            >
              info@colitas.io
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center aspect-square bg-white p-6 rounded-lg card-shadow-full">
            <div className="h-1/3">
              <FiPhoneCall className="text-6xl text-orange-400" />
            </div>
            <div className="title mt-4">
              <h2 className="text-3xl mb-2 font-bold text-[#393D72]">
                Phone Number
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full ml-2 animate-ping"></span>
              </h2>
            </div>
            <Link href={"tel:+86 189 5802 0517"} className="font-semibold text-lg">
              +86 189 5802 0517
            </Link>
            <Link href={"tel:+86 153 9583 7112"} className="font-semibold text-lg">
              +86 153 9583 7112
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center aspect-square bg-white p-6 rounded-lg card-shadow-full">
            <div className="h-1/3">
              <MdOutlineLocationOn  className="text-7xl text-orange-400" />
            </div>
            <div className="title mt-4">
              <h2 className="text-3xl mb-2 font-bold text-[#393D72]">
                Office Address
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full ml-2 animate-ping"></span>
              </h2>
            </div>
            <p className="font-semibold text-lg text-center">651 N Broad St, Middletown
            State of Delaware, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
