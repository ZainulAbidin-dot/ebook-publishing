import React from 'react';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import LegacyCTA from '@/components/LegacyCTA';
import FAQs from '@/components/FAQs';

export default function ContactUsPage() {
    return (
        <main>
            <ContactHero />
            <ContactForm />
            <FAQs />
            <Testimonials />
            <LegacyCTA />
        </main>
    );
}
