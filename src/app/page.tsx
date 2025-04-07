
import AppSection from '@/components/Home/AppSection';
import FeaturedArea from '@/components/Home/FeaturedArea';
import HeroSection from '@/components/Home/HeroSection';
import PhoneSlider from '@/components/Home/PhoneSlider';
import VideoSection from '@/components/Home/VideoSection';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            <FeaturedArea/>
            <AppSection/>
            <VideoSection/>
            <PhoneSlider/>
        </div>
    );
};

export default Homepage;