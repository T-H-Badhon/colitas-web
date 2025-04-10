import Image from "next/image";
import React from "react";

const ForWho = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[720px] mx-auto px-4">
        <div className="">
          <div className="mb-8">
            <h5 className="text-orange-400 text-lg font-bold">
              {"//"} <span className="mx-2">For Who?</span> {"//"}
            </h5>
            <h2 className="text-3xl md:text-6xl font-bold text-[#393d72]">
              A pet-loving community that creates connections with all the
              players in the industry
              <span className="inline-block w-2 h-2 bg-orange-400 rounded-full animate-ping relative top-0 -right-2" />
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="flex flex-col items-center justify-center">
                <div>
                    <Image src={"/assets/frontend/images/who/who-1.webp"} alt="Pet Owners" width={200} height={200} className="w-[100px] h-full object-contain" />
                </div>

                <h2 className="mt-2">Male & Female</h2>
            </div>
            
            <div className="flex flex-col items-center justify-center">
                <div>
                    <Image src={"/assets/frontend/images/who/who-2.webp"} alt="Pet Owners" width={200} height={200} className="w-[100px] h-full object-contain" />
                </div>

                <h2 className="mt-2">Families</h2>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div>
                    <Image src={"/assets/frontend/images/who/who-3.webp"} alt="Pet Owners" width={200} height={200} className="w-[100px] h-full object-contain" />
                </div>

                <h2 className="mt-2">Pet lovers</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
