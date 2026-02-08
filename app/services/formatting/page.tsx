"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/amazing-bg.webp';
import Pattern from '../../../assets/pattern-2.webp';

export default function FormattingPage() {
    const serviceTitle = "Professional Book Formatting";
    const serviceSubtitle = "Precision in Every Page, Perfection in Every Detail";
    const serviceDescription = "Expert book formatting for both print and digital platforms, ensuring a professional reading experience. We transform your manuscript into a beautifully formatted book ready for any platform.";

    const formattingServices = [
        { icon: "📱", title: "eBook Formatting", description: "Optimized formatting for Kindle, Apple Books, Kobo, and all major eBook platforms with reflowable text." },
        { icon: "🖨️", title: "Print Formatting", description: "Professional print-ready layouts meeting industry standards for POD and traditional printing." },
        { icon: "📑", title: "Interior Design", description: "Custom chapter headers, drop caps, ornaments, and decorative elements that enhance your book's aesthetic." },
        { icon: "📊", title: "Tables & Graphics", description: "Proper formatting of complex tables, charts, images, and diagrams for both print and digital." },
        { icon: "📖", title: "Front & Back Matter", description: "Professional title pages, copyright pages, dedications, table of contents, about author, and more." },
        { icon: "✨", title: "Typography Optimization", description: "Expert font selection, line spacing, margins, and hyphenation for optimal readability." }
    ];

    const formats = [
        { title: "Kindle (MOBI/KPF)", platform: "Amazon", description: "Formatted specifically for Amazon Kindle devices and apps." },
        { title: "ePub 3.0", platform: "Universal", description: "Industry-standard format for Apple Books, Kobo, B&N, and more." },
        { title: "Print-Ready PDF", platform: "Print", description: "High-resolution PDFs with bleed and crop marks for professional printing." },
        { title: "Fixed-Layout ePub", platform: "Special", description: "For children's books, cookbooks, and heavily illustrated works." }
    ];

    const trimSizes = [
        { size: "5\" x 8\"", type: "Mass Market", best: "Fiction, Novels" },
        { size: "5.5\" x 8.5\"", type: "Digest", best: "Fiction, Non-Fiction" },
        { size: "6\" x 9\"", type: "Trade", best: "Non-Fiction, Business" },
        { size: "7\" x 10\"", type: "Textbook", best: "Educational, Technical" },
        { size: "8.5\" x 11\"", type: "Large Format", best: "Workbooks, Manuals" },
        { size: "8\" x 10\"", type: "Picture Book", best: "Children's Books" }
    ];

    const processSteps = [
        { step: "01", title: "File Upload", description: "Submit your manuscript in Word, Google Docs, or any common format through our secure portal." },
        { step: "02", title: "Consultation", description: "We discuss your preferences for fonts, layout style, trim size, and any special requirements." },
        { step: "03", title: "Formatting & Design", description: "Our experts format your book with attention to every detail, from chapter headers to footnotes." },
        { step: "04", title: "Review & Revisions", description: "You receive a proof for review. We make unlimited revisions until you're 100% satisfied." },
        { step: "05", title: "Final Delivery", description: "Receive your publication-ready files in all requested formats with full ownership." }
    ];

    const features = [
        "Custom chapter title designs",
        "Professional table of contents",
        "Headers and footers",
        "Page numbering styles",
        "Widow/orphan control",
        "Image placement optimization",
        "Font embedding",
        "Hyperlink formatting",
        "Index and bibliography",
        "Footnotes and endnotes",
        "Drop caps and first line styling",
        "Section breaks and ornaments"
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
                        <a href="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Get a Quote</a>
                        <a href="tel:+18001234567" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem', borderColor: 'white', color: 'white' }}>Call Now</a>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Comprehensive Formatting Services</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>From eBooks to print, we handle every aspect of your book's interior design and formatting.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {formattingServices.map((service, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card" style={{ padding: '2rem', borderRadius: '1rem', backgroundColor: 'var(--bg-main)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Output Formats */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Output Formats We Deliver</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>Get your book formatted for any platform or combination of platforms.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {formats.map((format, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem', padding: '2rem', borderLeft: '4px solid var(--accent)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{format.platform}</div>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>{format.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{format.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trim Sizes */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Print Trim Size Options</h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>We format for all standard trim sizes used by major print-on-demand services and traditional printers.</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                {trimSizes.map((trim, idx) => (
                                    <div key={idx} style={{ padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border)' }}>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{trim.size}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500 }}>{trim.type}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{trim.best}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', height: 'clamp(300px, 50vw, 500px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <Image src={BgImage} alt="Trim Sizes" fill style={{ objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Checklist */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>What's Included in Our Formatting</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>Every formatting project includes these professional touches.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {features.map((feature, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-secondary)' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                </div>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Our 5-Step Formatting Process</h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>A streamlined process to get your book formatted quickly and professionally.</p>
                    </motion.div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                        {processSteps.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={{ flex: '1 1 200px', maxWidth: '220px', position: 'relative', padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 1rem' }}>{item.step}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '0.9rem' }}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Ready for Publication-Ready Formatting?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>Get your manuscript professionally formatted for print and digital platforms.</p>
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
