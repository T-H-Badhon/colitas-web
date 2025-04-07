import Image from 'next/image';
import React from 'react';

const PhoneSlider = () => {
    return (
        <div className='max-w-[780px] mx-auto my-14'>
            <Image src={"/assets/frontend/images/resources/phone-slider-2.webp"} alt="Phone Slider" width={2000} height={1000} className='w-full h-auto object-cover' />
        </div>
    );
};

export default PhoneSlider;