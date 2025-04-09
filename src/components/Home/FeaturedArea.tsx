import Image from 'next/image';
import React from 'react';

const FeaturedArea = () => {
    return (
        <div className='max-w-[1300px] mx-auto grid grid-cols-3 gap-8 relative -top-20'>
            <div className='px-7 py-5 flex items-center gap-3 shadow-lg bg-white'>
                <div>
                    <Image src={"/assets/frontend/images/resources/pet-care.webp"} alt='feature' width={140} height={140} className='w-[80px]'/>
                </div>
                <div>
                    <h1 className={"font-extrabold text-2xl mb-3 text-indigo-900"}>Pet Care</h1>
                    <p>Safe and loving environment for your pets.</p>
                </div>
            </div>
            
            <div className='px-7 py-5 flex items-center gap-3 shadow-lg bg-white'>
                <div>
                    <Image src={"/assets/frontend/images/resources/education.png"} alt='feature' width={140} height={140} className='w-[80px]'/>
                </div>
                <div>
                    <h1 className={"font-extrabold text-2xl mb-3 text-indigo-900"}>Education</h1>
                    <p>A better world for them begins with you.</p>
                </div>
            </div>
            
            <div className='px-7 py-5 flex items-center gap-3 shadow-lg bg-white'>
                <div>
                    <Image src={"/assets/frontend/images/resources/pet-care.webp"} alt='feature' width={140} height={140} className='w-[80px]'/>
                </div>
                <div>
                    <h1 className={"font-extrabold text-2xl mb-3 text-indigo-900"}>Adoption & Help</h1>
                    <p>Helping you find your perfect pet match.</p>
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedArea;