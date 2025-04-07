import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail} from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[1400px] mx-auto flex justify-between items-center py-4 px-4'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                      <MdOutlineMail/>
                      <p>info@colitas.io</p>
                    </div>

                    <div className='h-3 border-e-2'></div>

                    <div className='flex items-center gap-2'>
                        <FiPhone/>
                        <p>+86 189 5802 0517</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <button>EN</button>

                    <div className='flex items-center gap-2'>
                        <Link href="#"><FaFacebookF /></Link>
                        <Link href="#"><FaInstagram/></Link>
                        <Link href="#"><FaYoutube/> </Link>
                        <Link href="#"><FaTiktok/></Link>
                    </div>
                </div>
            </div>
            <hr  className='w-[100vw] border-white'/>
            <div className='max-w-[1400px] mx-auto flex items-center gap-10'>
                <div>
                    <Image src="/logo-2.png" alt="Logo" width={200} height={100} className='w-[250px]'/>
                </div>
                <div className='flex items-center gap-5 py-4'>
                    <Link href="#" className='font-bold text-xl'>Home</Link>
                    <Link href="#" className='font-bold text-xl'>The App</Link>
                    <Link href="#" className='font-bold text-xl'>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;