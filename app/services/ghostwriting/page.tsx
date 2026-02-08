"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../../../src/data/site-content.json';
import BgImage from '../../../assets/expertise.png';
import Pattern from '../../../assets/pattern-2.webp';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ServicePage({ params }: { params: { service: string } }) {
    // This is a template for service pages. 
    // In a real Next.js app with dynamic routes, this would be in [service]/page.tsx
    // But since I'm creating them individually as requested:

    // For Ghostwriting specifically (I'll replicate this for others)
    const serviceTitle = "Ghostwriting";
    const serviceDescription = "Collaborate with industry-leading experts to bring your vision to life through professionally written manuscripts.";

    return (
        <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>

            {/* Hero Section */}
            <section className="section" style={{
                position: 'relative',
                padding: 'var(--section-padding) 0',
                overflow: 'hidden',
                backgroundColor: 'var(--primary)',
                color: 'white'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0
                }}>
                    <Image
                        src={BgImage}
                        alt={serviceTitle}
                        fill
                        style={{ objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%)' }}
                        priority
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${Pattern.src})`,
                        backgroundSize: '600px',
                        opacity: 0.05
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontFamily: 'var(--font-serif)',
                            marginBottom: '2rem'
                        }}
                    >
                        {serviceTitle}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            color: 'rgba(255,255,255,0.8)',
                            lineHeight: 1.8
                        }}
                    >
                        {serviceDescription}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                                Professional {serviceTitle} Solutions
                            </h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                At Express Book Publishers, our {serviceTitle} services are designed to meet the highest standards of the literary industry. Whether you're just starting with an idea or have a partial manuscript, our team provides the expert guidance needed to ensure your book's success.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                                {[
                                    "Customized industry-standard approach",
                                    "Experienced subject matter experts",
                                    "End-to-end project management",
                                    "100% intellectual property rights"
                                ].map((point, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', height: 'clamp(300px, 50vw, 500px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <Image
                                src={BgImage}
                                alt="Service Detail"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="card" style={{ padding: 'clamp(4rem, 10vw, 6rem) 2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '3rem' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Ready to Get Started?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', opacity: 0.8, fontSize: '1.1rem' }}>
                            Speak with our experts today and take the first step towards becoming a published author.
                        </p>
                        <button className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'auto', minWidth: '220px' }}>Hire an Expert Now</button>
                    </div>
                </div>
            </section>

        </main>
    );
}
