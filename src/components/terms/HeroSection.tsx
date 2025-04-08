import Image from 'next/image';
import React from 'react';
import Navbar from '../Navigation/Navbar';

const HeroSection = () => {
    return (
        <div className='relative'>
            <div className='brightness-50'>
                <Image src={"/assets/frontend/images/breadcrumb/breadcrumb-6.webp"} width={2000} height={1000} alt="Hero Image" className='w-full h-[480px] object-cover' />    
            </div>
            <div className='absolute top-0 w-full h-full flex flex-col'>
                <Navbar/>
            </div>
        </div>
    );
};

export default HeroSection;