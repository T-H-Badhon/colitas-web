"use client"

import React, { useEffect, useState } from "react";

// Single counter component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CounterCard = ({ to, label, color = "text-black", duration = 2000 }:any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const frameDuration = 1000 / 60; // ~60 FPS
    const totalFrames = Math.round(duration / frameDuration);
    const increment = to / totalFrames;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(to, Math.floor(start + increment * frame));
      setCount(progress);

      if (frame >= totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [to, duration]);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 text-center">
      <div className="rounded-xl p-6">
        <h2 className="text-4xl font-bold text-white">
          {count}
          <span className={`ml-1 text-2xl font-bold ${color}`}>+</span>
        </h2>
        <h5 className="mt-2 text-lg font-medium text-white">{label}</h5>
      </div>
    </div>
  );
};

// Section component
const FactCounterArea = () => {
  const counters = [
    { to: 142, label: "Active Users", color: "text-red-500" },
    { to: 382, label: "Country Coverage", color: "text-green-500" },
    { to: 97, label: "Pet adoptions", color: "text-orange-500" },
    { to: 72, label: "Donations", color: "text-blue-500" },
  ];

  return (
    <section className="py-5 rounded-4xl bg-indigo-900 max-w-[1300px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {counters.map((counter, index) => (
            <CounterCard
              key={index}
              to={counter.to}
              label={counter.label}
              color={counter.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactCounterArea;
