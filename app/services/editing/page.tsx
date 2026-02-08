"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/exceptional-book.webp';
import Pattern from '../../../assets/pattern-2.webp';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function EditingPage() {
    const serviceTitle = "Editing";
    const serviceDescription = "Comprehensive manuscript evaluation and editing to enhance clarity, coherence, and impact.";

    return (
        <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
            <section className="section" style={{ position: 'relative', padding: 'var(--section-padding) 0', overflow: 'hidden', backgroundColor: 'var(--primary)', color: 'white' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    <Image src={BgImage} alt={serviceTitle} fill style={{ objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%)' }} priority />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${Pattern.src})`, backgroundSize: '600px', opacity: 0.05 }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>{serviceTitle}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>{serviceDescription}</motion.p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Refine Your Narrative</h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>Our elite editing team works meticulously to polish your prose while preserving your authentic voice. From developmental editing to final line checks, we ensure your story resonates with every reader.</p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                                {["Detailed grammar and syntax correction", "Structural and developmental feedback", "Consistency and tone alignment", "Professional proofreading passes"].map((point, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', height: 'clamp(300px, 50vw, 500px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <Image src={BgImage} alt="Editing Detail" fill style={{ objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
