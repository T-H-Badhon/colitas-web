
import AboutUsSection from '@/components/Home/AboutUsSection';
import AppSection from '@/components/Home/AppSection';
import BlogSection from '@/components/Home/BlogSection';
import FactCounterArea from '@/components/Home/CounterSection';
import FeaturedArea from '@/components/Home/FeaturedArea';
import HeroSection from '@/components/Home/HeroSection';
import LogoMarquee from '@/components/Home/LogoMarquee';
import PhoneSlider from '@/components/Home/PhoneSlider';
import ShowcaseSection from '@/components/Home/ShowcaseSection';
import SkillsetArea from '@/components/Home/SkillSetArea';
import VideoSection from '@/components/Home/VideoSection';
import WhyChooseUsSection from '@/components/Home/WhyChooseUs';
import React from 'react';

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            <FeaturedArea/>
            <AppSection/>
            <VideoSection/>
            <SkillsetArea/>
            <PhoneSlider/>
            <FactCounterArea/>
            <AboutUsSection/>
            <ShowcaseSection/>
            <WhyChooseUsSection/>
            <BlogSection/>
            <LogoMarquee/>
        </div>
    );
};

export default Homepage;