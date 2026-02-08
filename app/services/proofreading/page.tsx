"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/cta-bg.webp';
import Pattern from '../../../assets/pattern-2.webp';

export default function ProofreadingPage() {
    const serviceTitle = "Professional Proofreading";
    const serviceSubtitle = "The Final Polish Your Manuscript Deserves";
    const serviceDescription = "Meticulous proofreading to catch every error and ensure your book is polished to perfection. Our expert proofreaders are the last line of defense, ensuring your manuscript is flawless before publication.";

    const proofreadingServices = [
        { icon: "🔤", title: "Spelling & Typos", description: "Comprehensive spelling checks to eliminate typos and misspellings that undermine your credibility." },
        { icon: "✍️", title: "Grammar & Syntax", description: "Expert correction of grammatical errors and awkward sentence structures for smooth, professional prose." },
        { icon: "📝", title: "Punctuation Perfection", description: "Precise punctuation review to ensure proper comma usage, quotation marks, and all punctuation conventions." },
        { icon: "📐", title: "Formatting Consistency", description: "Thorough review of formatting elements including headers, spacing, margins, and style consistency." },
        { icon: "🎯", title: "Factual Accuracy", description: "Verification of dates, names, places, and other factual details to ensure accuracy throughout." },
        { icon: "📖", title: "Readability Check", description: "Final review for flow, clarity, and reader engagement to ensure a seamless reading experience." }
    ];

    const whyProofread = [
        { title: "First Impressions Matter", description: "Errors in your book can damage your reputation as an author. Professional proofreading ensures your work presents you at your best." },
        { title: "Reader Engagement", description: "Typos and errors pull readers out of your story. A polished manuscript keeps them immersed from start to finish." },
        { title: "Professional Standards", description: "Publishers and reviewers expect error-free manuscripts. Meet industry standards with thorough proofreading." },
        { title: "Peace of Mind", description: "Publish with confidence knowing your book has been meticulously reviewed by expert eyes." }
    ];

    const processSteps = [
        { step: "01", title: "Submit Your Manuscript", description: "Upload your completed manuscript through our secure portal. We accept all major file formats." },
        { step: "02", title: "Expert Review", description: "Our proofreaders meticulously review every page, marking errors and inconsistencies." },
        { step: "03", title: "Detailed Report", description: "Receive a comprehensive report highlighting all corrections with explanations." },
        { step: "04", title: "Final Delivery", description: "Get your polished, error-free manuscript ready for publication." }
    ];

    const stats = [
        { number: "99.9%", label: "Error Detection Rate" },
        { number: "500+", label: "Books Proofread" },
        { number: "48h", label: "Average Turnaround" },
        { number: "100%", label: "Satisfaction Guarantee" }
    ];

    return (
        <main style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section className="section" style={{ position: 'relative', padding: 'var(--section-padding) 0', overflow: 'hidden', backgroundColor: 'var(--primary)', color: 'white' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    <Image src={BgImage} alt={serviceTitle} fill style={{ objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%)' }} priority />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${Pattern.src})`, backgroundSize: '600px', opacity: 0.05 }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
                        {serviceTitle}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem' }}>
                        {serviceSubtitle}
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
                        {serviceDescription}
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Get a Free Quote</a>
                        <a href="tel:+18001234567" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem', borderColor: 'white', color: 'white' }}>Call Now</a>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-serif)' }}>{stat.number}</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proofreading Services Grid */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>What We Check For</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>Our comprehensive proofreading service covers every aspect of your manuscript to ensure publication-ready quality.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {proofreadingServices.map((service, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card" style={{ padding: '2rem', borderRadius: '1rem', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Proofreading Matters */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', height: 'clamp(300px, 50vw, 500px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <Image src={BgImage} alt="Proofreading Importance" fill style={{ objectFit: 'cover' }} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '2rem' }}>Why Proofreading Matters</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {whyProofread.map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.25rem' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Our Simple 4-Step Process</h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>Getting your manuscript proofread has never been easier.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {processSteps.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} style={{ position: 'relative', padding: '2rem', borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, margin: '0 auto 1.5rem' }}>{item.step}</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Ready to Perfect Your Manuscript?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>Don't let errors undermine your hard work. Get professional proofreading and publish with confidence.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Get Started</a>
                            <a href="tel:+18001234567" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Talk to an Expert</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
