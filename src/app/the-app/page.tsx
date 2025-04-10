import AppSection from '@/components/Home/AppSection';
import Faq from '@/components/Home/Faq';
import PhoneSlider from '@/components/Home/PhoneSlider';
import VideoSection from '@/components/Home/VideoSection';
import HeroSection from '@/components/terms/HeroSection';
import AppFeatures from '@/components/theApp/Features';
import ForWho from '@/components/theApp/ForWho';
import React from 'react';

const TheApppage = () => {
    return (
        <div>
            <HeroSection/>
            <div className='my-16'>
                <h2 className='text-center text-4xl font-extrabold'><span className='text-cyan-400'>No</span> more switching between <br />
                <span className='text-cyan-400'>different apps!</span></h2>
            </div>
            <AppSection/>
            <VideoSection/>
            <AppFeatures/>
            <PhoneSlider/>
            <ForWho/>
            <Faq/>
        </div>
    );
};

export default TheApppage;