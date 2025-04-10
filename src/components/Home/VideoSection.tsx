"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';

const VideoSection = () => {

    const [showVideo, setShowVideo] =useState(false);
    return (
        <div className='relative my-14'>
            <div className=' bg-orange-400 px-28 brightness-75'>
                <Image src={"/assets/frontend/images/resources/video-gallery-bg.jpg"} alt="Video Background" width={2000} height={1000} className='w-full max-h-[720px] object-cover' />    
            </div>

            <div className='absolute top-0 w-full h-full flex items-center justify-center'>

                <button onClick={()=>{setShowVideo(true)}} className={`w-[100px] h-[100px] bg-white rounded-full items-center justify-center shadow-lg ${showVideo? 'hidden': "flex"}`}>
                    <FaPlay className='text-2xl' /> 
                </button>
                <div className={`${showVideo? 'flex': "hidden"} fixed z-[99999] top-0 w-[100vw] h-[100vh] bg-black/50 items-center justify-center`}>
                    <button onClick={()=>{setShowVideo(false)}} className='absolute top-5 right-5 text-white text-2xl cursor-pointer'><RxCross1/></button>
                    <video className='w-full max-w-[680px] h-fit object-cover' controls>
                        <source src="/assets/frontend/videos/colitas.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
            
        </div>
    );
};

export default VideoSection;