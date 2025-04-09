import Image from 'next/image';
import React from 'react';

const AppSection = () => {
    return (
        <div className='max-w-[570px] mx-auto'>
            
            <div>
                <Image src={'/assets/frontend/images/resources/phone-6.webp'} width={600} height={1200} alt='app image' className='w-full aspect-auto' />
            </div>
            <h1 className='text-center font-bold'>COLITAS app</h1>
            <h1 className='text-center font-extrabold text-4xl my-5'>All-in-one App</h1>
            <h1 className='text-center text-lg'><span className='text-blue-500 font-bold'>All the services</span> you need <span className='text-blue-500 font-bold'>in one place</span>, creating an ecosystem where <span className='text-blue-500 font-bold'>all actors</span> can <span className='text-blue-500 font-bold'>interact</span> through Colitas App</h1>
            <div className='flex items-center justify-center gap-5 mt-5'>
                <Image src={'/assets/frontend/images/resources/google-play.webp'} width={600} height={300} alt='app image' className='w-[200px] aspect-auto rounded-lg' />
                <Image src={"/assets/frontend/images/resources/app-store.webp"} width={600} height={300} alt='app image' className='w-[200px] aspect-auto rounded-lg' />
            </div>
        </div>
    );
};

export default AppSection;