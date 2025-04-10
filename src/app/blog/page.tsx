import Blogs from '@/components/blog/Blogs';
import HeroSection from '@/components/blog/HeroSection';
import React from 'react';

const Blogpage = () => {
    return (
        <div>
            <HeroSection/>
            <Blogs/>
        </div>
    );
};

export default Blogpage;