import Image from "next/image";
import React from "react";
import Navbar from "../Navigation/Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-[100vw] overflow-hidden">
      <div className="brightness-50">
        <Image
          src={"/assets/frontend/images/breadcrumb/breadcrumb-3.webp"}
          width={2000}
          height={1000}
          alt="Hero Image"
          className="w-[100vw] min-h-[480px] object-cover"
        />
      </div>
      <div className="absolute top-0 w-[100vw] h-full flex flex-col">
        <Navbar />
        
        <div className="flex-1 my-10 flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            News Feeds
            <span className="inline-block w-4 h-4 bg-green-300 rounded-full ml-2"></span>
          </h2>

          <div className=" flex items-center">
            <Link href={"/"} className="font-bold text-lg text-white hover:text-orange-400 pr-2">Home</Link>

            <div className="border-e-[3px] border-white h-4"></div>

            <h2 className="font-bold text-lg text-orange-400 pl-2">Blog</h2>
          </div>
        </div>

        <div className="relative -bottom-1">
          <Image
            src={"/assets/frontend/images/shape/banner-curve.png"}
            alt="curve shape"
            width={2000}
            height={160}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
