"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail} from 'react-icons/md';
import MobileNav from './MobileNav';

const Navbar = () => {

    const path = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>  
        <div className='text-white hidden lg:block'>
            <div className='max-w-[1400px] mx-auto flex justify-between items-center py-5 px-4'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                      <MdOutlineMail size={20} stroke='2px'/>
                      <p className='font-semibold'>info@colitas.io</p>
                    </div>

                    <div className='h-3 border-e-2'></div>

                    <div className='flex items-center gap-2'>
                        <FiPhone size={20}/>
                        <p className='font-semibold'>+86 189 5802 0517</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    {/* <button cla>EN</button> */}

                    <div className='flex items-center gap-4'>
                        <Link href="https://www.facebook.com/colitascare" target='_blank'><FaFacebookF size={20} /></Link>
                        <Link href="https://www.instagram.com/colitascare/" target='_blank'><FaInstagram size={20}/></Link>
                        <Link href="https://www.youtube.com/channel/UCGnccMPPqX-0uiT9VW5l5Ew" target='_blank'><FaYoutube size={20}/> </Link>
                        <Link href="https://www.tiktok.com/@colitascare" target='_blank'><FaTiktok size={20}/></Link>
                    </div>
                </div>
            </div>
            <hr  className='w-[100vw] border-gray-400 mb-4'/>
            <div className='max-w-[1400px] mx-auto flex items-center gap-10'>
                <Link href="/">
                    <Image src="/logo-2.png" alt="Logo" width={200} height={100} className='w-[220px]'/>
                </Link>
                <div className='flex items-center gap-5 py-4'>
                    <Link href="/" className={`font-bold text-xl ${path=="/" ? "text-orange-400":""}`}>Home</Link>
                    <Link href="/the-app" className={`font-bold text-xl ${path=="/the-app" ? "text-orange-400":""}`}>The App</Link>
                    <Link href="/blog" className={`font-bold text-xl ${path=="/blog" ? "text-orange-400":""}`}>Blog</Link>
                </div>
            </div>
        </div>

        <div className='lg:hidden'><MobileNav/></div>

        <div className={`${isScrolled?" translate-y-0": " -translate-y-[300px]"} fixed top-0 w-[100vw] z-[9999] transition-all duration-500`}>
            <MobileNav/>
        </div>
        </>
    );
};

export default Navbar;