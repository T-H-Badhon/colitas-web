"use client"
import React, { useEffect, useState } from "react";

const CircularProgress = ({ lastValue = 0, color = "#000", title = "", description = "" }) => {

    const [value, setValue] = useState(0);
  const radius = 100;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  useEffect(()=>{
    if(value<lastValue){
        setTimeout(() => {
            setValue(value + 1);
        }, 10);

    }

  },[value,lastValue])

  return (
    <div className="flex flex-col items-center justify-center space-y-4 relative">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="#f4f2ef"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="text-7xl text-[#393d72] absolute flex items-center font-extrabold"><h2 className="-top-5 relative">{value}<span className="text-lg">%</span></h2></div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#393d72]">{title}</h2>
        <p className="text-sm text-[#393d72] font-semibold">{description}</p>
      </div>
    </div>
  );
};

const SkillsetArea = () => {
  const data = [
    {
      value: 75,
      color: "#ff4880",
      title: "People",
      description: "who adopt a dog report a boost in their sense of well-being",
    },
    {
      value: 90,
      color: "#8fc424",
      title: "Owners",
      description: "unaware of the long-term health impacts of tail docking on dogs",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <CircularProgress
              key={index}
              lastValue={item.value}
              color={item.color}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsetArea;
