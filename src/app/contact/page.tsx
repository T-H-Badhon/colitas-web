
import AddressSection from '@/components/contact/AddressSection';
import ContactForm from '@/components/contact/ContactForm';
import HeroSection from '@/components/contact/HeroSection';
import React from 'react';

const Contactpage = () => {
    return (
        <div>
            <HeroSection/>
            <ContactForm/>
            <AddressSection/>
        </div>
    );
};

export default Contactpage;