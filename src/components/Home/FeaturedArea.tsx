import Image from 'next/image';
import React from 'react';

const FeaturedArea = () => {
    return (
        <div className='max-w-[1300px] mx-auto grid grid-cols-3 gap-10 relative -top-20'>
            <div className='p-7 flex items-center gap-3 shadow-lg bg-white'>
                <div>
                    <Image src={"/assets/frontend/images/resources/pet-care.webp"} alt='feature' width={140} height={140} className='w-[80px]'/>
                </div>
                <div>
                    <h1 className={"font-bold text-xl mb-3"}>Pet Care</h1>
                    <p>Safe and loving environment for your pets.</p>
                </div>
            </div>
            <div className='p-7 flex items-center gap-3 shadow-lg bg-white'>
                <div>
                    <Image src={"/assets/frontend/images/resources/pet-care.webp"} alt='feature' width={140} height={140} className='w-[80px]'/>
                </div>
                <div>
                    <h1 className={"font-bold text-xl mb-3"}>Pet Care</h1>
                    <p>Safe and loving environment for your pets.</p>
                </div>
            </div>
            <div className='p-7 flex items-center gap-3 shadow-lg bg-white'>
                <div>
                    <Image src={"/assets/frontend/images/resources/pet-care.webp"} alt='feature' width={140} height={140} className='w-[80px]'/>
                </div>
                <div>
                    <h1 className={"font-bold text-xl mb-3"}>Pet Care</h1>
                    <p>Safe and loving environment for your pets.</p>
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedArea;