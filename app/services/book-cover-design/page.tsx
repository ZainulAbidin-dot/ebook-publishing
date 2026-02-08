"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/expertise.png';
import Pattern from '../../../assets/pattern-2.webp';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function BookCoverDesignPage() {
    const serviceTitle = "Book Cover Design";
    const serviceDescription = "Visually striking cover designs that capture the essence of your story and command attention.";

    return (
        <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
            <section className="section" style={{ position: 'relative', padding: '12rem 0 8rem', overflow: 'hidden', backgroundColor: 'var(--primary)', color: 'white' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    <Image src={BgImage} alt={serviceTitle} fill style={{ objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%)' }} priority />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${Pattern.src})`, backgroundSize: '600px', opacity: 0.05 }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>{serviceTitle}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>{serviceDescription}</motion.p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Identity in a Glance</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>We believe in a collaborative design process. Our artists work with you to create a cover that doesn't just look great, but encapsulates the very soul of your manuscript.</p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                                {["Custom hand-painted or digital art", "Genre-specific typography and layout", "3D mockups for marketing materials", "Print-ready jacket and spine design"].map((point, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', height: '500px', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <Image src={BgImage} alt="Design Detail" fill style={{ objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
