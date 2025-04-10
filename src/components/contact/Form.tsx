"use client";

import type React from "react";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { countries } from "../../../const/countryList";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GoPencil } from "react-icons/go";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  // Shortened country list for brevity

  return (
    <div className=" mx-auto xl:w-[1100px]">
      <div className="text-center mb-10">
        <p className="text-lg font-medium text-orange-400 mb-2">
          {"//"}
          <span className="mx-2">Contact Us</span> {"//"}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#393D72]">
          Get In Touch
          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full ml-2 animate-ping"></span>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
              <input
                type="text"
                placeholder="Your name"
                className="text-black placeholder:text-black flex-1 focus:outline-0"
              />
              <FaRegUser className="text-orange-400" />
            </div>

            <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
              <input
                type="text"
                placeholder="Email address"
                className="text-black placeholder:text-black flex-1 focus:outline-0"
              />
              <MdMailOutline className="text-orange-400" />
            </div>

            <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
              <select className="flex-1 focus:outline-0 w-full remove-default">
                <option value="">Select Country</option>
                {countries?.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div ><FaArrowDownLong className="text-orange-400"/></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
              <input
                type="text"
                placeholder="Phone number"
                className="text-black placeholder:text-black flex-1 focus:outline-0"
              />
              <FiPhone className="text-orange-400" />
            </div>

            <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
              <input
                type="text"
                placeholder="Subject"
                className="text-black placeholder:text-black flex-1 focus:outline-0"
              />
              <GoPencil className="text-orange-400" />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write message"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md   min-h-[150px] resize-y text-black placeholder:text-black "
              required
            ></textarea>
          </div>

          <div className="text-center">
            <div className="mx-auto w-fit">
              <button className="flex item-center justify-center px-4 py-3 bg-orange-400 text-white font-bold rounded-lg gap-2 mt-5 w-fit">
                <IoIosSend className="text-2xl" />
                <p>Submit Now</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
