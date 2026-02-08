"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/process-bg.webp';
import Pattern from '../../../assets/pattern-2.webp';
import HeroForm from '../../../components/HeroForm';

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
                padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem)',
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

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ textAlign: 'left' }}
                        >
                            <motion.h6
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{
                                    color: 'var(--accent)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    marginBottom: '1rem',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem'
                                }}
                            >
                                Global Book Publishing
                            </motion.h6>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                                    fontFamily: 'var(--font-serif)',
                                    marginBottom: '2rem',
                                    lineHeight: 1.1
                                }}
                            >
                                {serviceTitle}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                                    maxWidth: '600px',
                                    color: 'rgba(255,255,255,0.9)',
                                    lineHeight: 1.8
                                }}
                            >
                                {serviceSubtitle}
                            </motion.p>
                        </motion.div>

                        {/* Right Column: Mini Form */}
                        <HeroForm defaultService="book-publishing" />
                    </div>
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image src={BgImage} alt="Publishing Process" style={{ width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--primary)' }}>Why Publish with Whitemount?</h2>
                    </div>
                    <div className="grid" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ padding: '2.5rem', backgroundColor: 'white', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid var(--border)' }}
                            >
                                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{v.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Process */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)' }}>A Streamlined Path to Publication</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem' }}
                            >
                                <div style={{ minWidth: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700 }}>{step.num}</div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.4rem' }}>{step.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Launch Your Literary Career Today</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3.5rem', fontSize: '1.2rem', opacity: 0.9 }}>Join the community of successful authors who have trusted Whitemount Publishing to bring their books to life.</p>
                    <button className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'auto' }}>Get Started with Publishing</button>
                </div>
            </section>
        </main>
    );
}
