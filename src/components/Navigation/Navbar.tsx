"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail} from 'react-icons/md';

const Navbar = () => {

    const path = usePathname();
    console.log(path);

    return (
        <div className='text-white'>
            <div className='max-w-[1400px] mx-auto flex justify-between items-center py-4 px-4'>
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

                    <div className='flex items-center gap-2'>
                        <Link href="#"><FaFacebookF size={20} /></Link>
                        <Link href="#"><FaInstagram size={20}/></Link>
                        <Link href="#"><FaYoutube size={20}/> </Link>
                        <Link href="#"><FaTiktok size={20}/></Link>
                    </div>
                </div>
            </div>
            <hr  className='w-[100vw] border-white '/>
            <div className='max-w-[1400px] mx-auto flex items-center gap-10'>
                <div>
                    <Image src="/logo-2.png" alt="Logo" width={200} height={100} className='w-[250px]'/>
                </div>
                <div className='flex items-center gap-5 py-4'>
                    <Link href="/" className={`font-bold text-xl ${path=="/" ? "text-orange-400":""}`}>Home</Link>
                    <Link href="/the-app" className={`font-bold text-xl ${path=="/the-app" ? "text-orange-400":""}`}>The App</Link>
                    <Link href="/blog" className={`font-bold text-xl ${path=="/blog" ? "text-orange-400":""}`}>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;