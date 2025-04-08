import Image from 'next/image';
import React from 'react';
import FormComponent from './Form';

const ContactForm = () => {
    return (
        <div className='relative'>
            <div>
                <Image src={"/assets/frontend/images/shape/contact-form-style1-bg.png"} width={2000} height={1000} alt="Hero Image" className='w-full fit object-cover' />    
            </div>

            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center'>
                    <FormComponent/>
            </div>
        </div>
    );
};

export default ContactForm;