"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/process-bg.webp';
import Pattern from '../../../assets/pattern-2.webp';
import ExceptionalImg from '../../../assets/exceptional-book.webp';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function BookPublishingPage() {
    const serviceTitle = "Best Book Publishing Services Under One Roof";
    const serviceSubtitle = "A seamless journey from manuscript to global marketplaces with our end-to-end publishing solutions. We deliver extraordinary results that leave a long-lasting impact.";

    const features = [
        {
            title: "Diverse Formats",
            desc: "Complete support for EBook, Paperback, Hardcover, and Audio Book publishing tailored to your target audience."
        },
        {
            title: "Specialized Editing",
            desc: "Professional Line Editing, Copy Editing, Developmental Editing, and Typesetting to polish your work to perfection."
        },
        {
            title: "Distribution & Royalty",
            desc: "Global distribution setup via Print on Demand. You retain 100% content ownership and all earned royalties."
        },
        {
            title: "Marketing & Promo",
            desc: "Strategic promotional consultation to increase awareness and position your book for success in the global market."
        }
    ];

    const values = [
        {
            title: "Privacy & Protection",
            desc: "We ensure to protect your confidential information and guarantee 100% intellectual property rights."
        },
        {
            title: "Maximum Profitability",
            desc: "Enjoy the complete profit you earn from your book. We don’t charge any commission on your sales."
        },
        {
            title: "Qualified Experts",
            desc: "Our professionals provide you with a perfect book for your readers to read, ensuring coherence and clarity."
        },
        {
            title: "Authentic Research",
            desc: "Extensive research about your book's topic ensures that every piece of work is authentic and authoritative."
        }
    ];

    const steps = [
        { num: "01", title: "Signup", desc: "A dedicated and responsive manager is allocated to your project to guide you through every stage." },
        { num: "02", title: "Outline & Research", desc: "Professional editors carry out in-depth research to refine the theme and structural plan of your book." },
        { num: "03", title: "Initial Draft", desc: "We complete the editing of the first chapter and seek your approval before proceeding further." },
        { num: "04", title: "Revision & Finalization", desc: "Meticulous polishing and revisions are provided to ensure your manuscript reaches literary perfection." },
        { num: "05", title: "Global Publication", desc: "Final distribution across global retailers with a focus on timely delivery and technical excellence." }
    ];

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
                        alt="Book Publishing"
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
                            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                            fontFamily: 'var(--font-serif)',
                            marginBottom: '2rem',
                            maxWidth: '1000px',
                            margin: '0 auto 2rem'
                        }}
                    >
                        {serviceTitle}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                            maxWidth: '850px',
                            margin: '0 auto',
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.8
                        }}
                    >
                        {serviceSubtitle}
                    </motion.p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Comprehensive Publishing Solutions</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                We take the complexity out of publishing. Our distribution network puts your book in the hands of readers worldwide, handling everything from ISBN registration to retail setup.
                            </p>
                            <div className="grid grid-2" style={{ gap: '2rem' }}>
                                {features.map((feature, idx) => (
                                    <div key={idx}>
                                        <h4 style={{ color: 'var(--accent)', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>{feature.title}</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', height: 'clamp(400px, 50vw, 600px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
                        >
                            <Image
                                src={ExceptionalImg}
                                alt="Exceptional Results"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Why Choose Whitemount?</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>We believe in transparency, quality, and your success as an author.</p>
                    </div>
                    <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass"
                                style={{ padding: '2.5rem', borderRadius: '2rem', background: 'white', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}
                            >
                                <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--accent)', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                </div>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{val.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url(${Pattern.src})`, backgroundSize: '400px', opacity: 0.1, zIndex: 0
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Our Publishing Process</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>A systematic five-step process that ensures a seamless transition in every stage of publication.</p>
                    </div>
                    <div className="grid grid-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' }}
                            >
                                <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-serif)', opacity: 0.5 }}>{step.num}</span>
                                <h4 style={{ color: 'var(--accent)', margin: '1rem 0', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>{step.title}</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="card"
                        style={{ padding: 'clamp(3.5rem, 8vw, 5rem) var(--container-padding)', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '3rem' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>READY TO WRITE YOUR LEGACY?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem', opacity: 0.8, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                            Join our community of published authors and let our experts guide you to global publication success.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', width: 'clamp(200px, 100%, 300px)' }}>Get Started Now</button>
                            <button className="btn" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', border: '2px solid white', color: 'white', background: 'transparent', width: 'clamp(200px, 100%, 300px)' }}>Live Chat</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
