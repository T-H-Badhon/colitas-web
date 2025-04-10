import Image from "next/image";
import React from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const blogs = [
  {
    image: "/storage/xyZJvj2p3gNCoVl97qeQodHmR4XlebgDJyOxX8RG.webp",
    title: "Know Your Dog's Tail: Anatomy and Function",
    link: "/blog/know-your-dog-s-tail-anatomy-and-function.html",
    tags: ["Pet", "Medicine"],
    author: "Colitas",
  },
  {
    image: "/storage/lMFgTvjFlxfsfowF30ztWiePgAujbdB17a6S6CvA.webp",
    title: "Canine Tails: Exploring the Diversity of Breeds and Their Tail Stories",
    link: "/blog/canine-tails-exploring-the-diversity-of-breeds-and-their-tail-stories.html",
    tags: ["Pet", "Medicine"],
    author: "Colitas",
  },
  {
    image: "/storage/dPTiDU0wo9F9AKSUj6dDiwEhdiwYEpbkAHU0OR5M.webp",
    title: "The Meaning behind the Tail: The Importance of Tails in Dogs",
    link: "/blog/the-meaning-behind-the-tail-the-importance-of-tails-in-dogs.html",
    tags: ["Pet", "Medicine"],
    author: "Colitas",
  },
];

const Blogs = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Blog List */}
        <div className="flex flex-wrap gap-6 justify-center">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] max-w-[370px]   overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="h-[220px] overflow-hidden">
                <Image
                 width={600}
                 height={400}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="p-4">
                <ul className="text-sm text-[#393d72] flex flex-wrap gap-3 mb-2">
                  <li>
                    <span className="font-bold hover:text-orange-400">By {blog.author}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoPricetagsOutline  className="text-orange-400"/>
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="font-bold hover:text-orange-400">
                        {tag} <span className={`${i+1 == blog.tags?.length? "hidden":""}`}>,</span>
                      </span>
                    ))}
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                  <a href={blog.link} className="hover:text-orange-400 transition-all">
                    {blog.title}...
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full ml-1 animate-pulse" />
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10 gap-2">
            <div><MdOutlineKeyboardDoubleArrowLeft className="text-3xl font-bold"/></div>
            <div className="flex items-center justify-center px-5 py-3 bg-indigo-900 rounded-lg text-white font-bold">
                <h2>1</h2>
            </div>
            <div><MdOutlineKeyboardDoubleArrowRight className="text-3xl font-bold"/></div>

        </div>
      </div>
    </section>
  );
};

export default Blogs;
