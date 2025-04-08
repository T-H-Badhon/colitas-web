import Image from "next/image";
import React from "react";

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

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h5 className="text-gray-500 text-lg font-semibold">
              {"//"} <span className="text-black">Blog</span> {"//"}
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
              News & Feed
              <span className="inline-block w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
            </h2>
          </div>
          <a
            href="/blog.html"
            className="text-sm mt-4 md:mt-0 text-blue-600 font-semibold hover:underline flex items-center gap-1"
          >
            View all <span className="ml-1">→</span>
          </a>
        </div>

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
                <ul className="text-sm text-gray-500 flex flex-wrap gap-3 mb-2">
                  <li>
                    <span className="font-medium">By {blog.author}</span>
                  </li>
                  <li>
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="mr-2">
                        #{tag}
                      </span>
                    ))}
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                  <a href={blog.link} className="hover:text-blue-600 transition-all">
                    {blog.title}
                    <span className="inline-block w-2 h-2 bg-pink-500 rounded-full ml-1 animate-pulse" />
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
