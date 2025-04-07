import Image from 'next/image';
import React from 'react';

const AppSection = () => {
    return (
        <div className='max-w-[570px] mx-auto'>
            
            <div>
                <Image src={'/assets/frontend/images/resources/phone-6.webp'} width={600} height={1200} alt='app image' className='w-full aspect-auto' />
            </div>
            <h1 className='text-center'>Colitas App</h1>
            <h1 className='text-center'>All-in-One App</h1>
            <h1 className='text-center'>All the services you need in one place, creating an ecosystem where all actors can interact through Colitas App</h1>
            <div className='flex items-center justify-center gap-5 mt-5'>
                <Image src={'/assets/frontend/images/resources/google-play.webp'} width={600} height={300} alt='app image' className='w-[200px] aspect-auto rounded-lg' />
                <Image src={"/assets/frontend/images/resources/app-store.webp"} width={600} height={300} alt='app image' className='w-[200px] aspect-auto rounded-lg' />
            </div>
        </div>
    );
};

export default AppSection;