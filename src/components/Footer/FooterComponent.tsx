import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const FooterComponent = () => {
  return (
    <div>
      <div className="bg-[#22254A] py-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Image
                src={"/assets/frontend/images/resources/hidden-bar-logo.png"}
                alt="logo"
                width={200}
                height={100}
                className=" w-[200px]"
              />
            </div>
            <div className="flex items-center gap-5">
              <Link target="_blank"
                href={"https://www.facebook.com/colitascare"}
                className="w-12 h-12 bg-[#3B5999] rounded-lg flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-2xl" />
              </Link>
              <Link target="_blank"
                href={"https://www.instagram.com/colitascare/"}
                className="w-12 h-12 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] rounded-lg flex items-center justify-center"
              >
                <FaInstagram className="text-white text-2xl" />
              </Link>
              <Link target="_blank"
                href={"https://www.tiktok.com/@colitascare"}
                className="w-12 h-12 bg-[#55ACEE] rounded-lg flex items-center justify-center"
              >
                <FaTiktok className="text-white text-2xl" />
              </Link>
              <Link target="_blank"
                href={"https://www.youtube.com/channel/UCGnccMPPqX-0uiT9VW5l5Ew"}
                className="w-12 h-12 bg-[#CD201F] rounded-lg flex items-center justify-center"
              >
                <FaYoutube className="text-white text-2xl" />
              </Link>
            </div>
          </div>

          <hr className="border-gray-500 my-7" />

          <div className="grid md:grid-cols-3 gap-10 py-10 px-4 text-white">
            <div className="flex flex-col gap-5 items-center justify-center">
              <h1 className="text-2xl font-bold">Support</h1>

              <div>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white font-semibold text-lg"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/the-app"
                  className="text-gray-400 hover:text-white font-semibold text-lg"
                >
                  The App
                </Link>
              </div>
              <div>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white font-semibold text-lg"
                >
                  Blog
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white font-semibold text-lg"
                >
                  Contact Us
                </Link>
              </div>
              <div>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white font-semibold text-lg"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="flex items-start justify-center">
              <button className="px-8 py-3 font-bold text-lg border border-orange-400 rounded-lg mx-auto hover:bg-orange-400 transition duration-300">
                Download Media Kit
              </button>
            </div>
            <div className="flex items-start justify-end">
              <div className="max-w-[300px]">
                <h1 className="text-2xl font-bold">
                  Newsletter
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-2 animate-pulse"></span>
                </h1>

                <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="text-black placeholder:text-black flex-1 focus:outline-0"
                  />
                  <FaRegUser className="text-orange-400" />
                </div>
                <div className="flex bg-white py-3 px-6 items-center rounded-lg mt-5">
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="text-black placeholder:text-black flex-1 focus:outline-0"
                  />
                  <MdOutlineEmail className="text-orange-400" />
                </div>

                <div>
                  <button className="flex item-center justify-center px-4 py-3 bg-orange-400 text-white font-bold rounded-lg gap-2 mt-5 w-full">
                    <IoIosSend className="text-2xl" />
                    <p>Submit Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171A39] py-5 text-center text-white">
        <p className="text-sm font-semibold">
            © 2025 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
