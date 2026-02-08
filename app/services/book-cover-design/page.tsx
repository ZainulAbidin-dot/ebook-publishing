"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/expertise.png';
import Pattern from '../../../assets/pattern-2.webp';
import CoverBanner from '../../../assets/cover-banner.webp';
import DustJacketImg from '../../../assets/dust-jacket-cover.webp';
import ExceptionalBookImg from '../../../assets/exceptional-book.webp';
import TypesImg from '../../../assets/types-cd-11.webp';
import BioBookImg from '../../../assets/bio-book.webp';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function BookCoverDesignPage() {
    const serviceTitle = "Attractive cover designs to gain attention from potential readers";
    const serviceSubtitle = "Bring life to your book project with our artistic creative skill set. The importance of a good book cover cannot be understated—it can make or break your book.";

    const designProcesses = [
        {
            title: "Concept Development",
            desc: "We figure out the essence of your theme. This foundation allows us to develop unique concepts that resonate with the crux of your story."
        },
        {
            title: "Custom Illustration",
            desc: "Our artists handcraft one-of-a-kind visuals and artwork tailored to your content, infusing the cover with your vision and creativity."
        },
        {
            title: "Typography & Layout",
            desc: "Meticulous selection of fonts, colors, and arrangements to ensure your cover effectively conveys the genre and mood of your book."
        },
        {
            title: "Print & Optimization",
            desc: "Whether eye-catching paperbacks or pixel-perfect eBooks, we optimize designs for every medium to ensure excellence across all packages."
        }
    ];

    const coverTypes = [
        {
            title: "Dust Jacket Cover",
            desc: "Designed to prevent dust and protect from spills. Sleek, attractive, and perfectly laminated for maximum resistance and longevity.",
            img: DustJacketImg
        },
        {
            title: "Hardboard Cover",
            desc: "Offers increased durability with a robust structure. Museum-grade board choices ensure a long life for books readers will cherish.",
            img: BioBookImg
        },
        {
            title: "Paperback Cover",
            desc: "A ubiquitious and flexible option. Our designers help you pursue a softcover design that maintains professional quality and impact.",
            img: ExceptionalBookImg
        }
    ];

    const workCategories = [
        { title: "Printed Books", desc: "Long-lasting covers to protect your story." },
        { title: "Comic Books", desc: "Colorful illustrations to entice readers." },
        { title: "Magazines", desc: "Trendy designs to put your best foot forward." },
        { title: "Photo Albums", desc: "Expertly photographed album covers." },
        { title: "Year Books", desc: "Academic achievements in an appealing format." },
        { title: "Ebooks", desc: "Creative digital covers for maximum online impact." }
    ];

    const steps = [
        { num: "01", title: "Making Your Order", desc: "Start working with the greatest designers in the industry to commence your project in earnest." },
        { num: "02", title: "Process of Drafting", desc: "We build a mind map and outline of the design beats to ensure a smooth, delay-free experience." },
        { num: "03", title: "Gaining Feedback", desc: "A collaborative review to ensure justice was done to your vision and full satisfaction is achieved." },
        { num: "04", title: "Delivery of Work", desc: "Timely delivery of professional designs that inspire and engage your target audience." }
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
                        src={CoverBanner}
                        alt="Book Cover Design"
                        fill
                        style={{ objectFit: 'cover', opacity: 0.2, filter: 'grayscale(20%)' }}
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

            {/* Service Highlights */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}
                            >
                                Unique Designs Tailored For You
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Our creative designers will work to bring life to your book project with their amazing artistic skill set. We offer bespoke graphics across diverse formats, backed by our 24/7 assistance and solid guarantee of sole ownership.
                            </p>
                            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                                {designProcesses.map((proc, idx) => (
                                    <div key={idx}>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{proc.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{proc.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', height: 'clamp(300px, 40vw, 500px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <Image
                                src={TypesImg}
                                alt="Cover Design Types"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cover Types */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Types of Cover Designs</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Professional formats for every publishing need</p>
                    </div>
                    <div className="grid grid-3">
                        {coverTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass"
                                style={{ padding: '0', borderRadius: '2rem', background: 'white', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                                    <Image src={type.img} alt={type.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{type.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{type.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Categories */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)' }}>What We Work On</h2>
                    </div>
                    <div className="grid grid-3">
                        {workCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                            >
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent)', marginTop: '0.6rem', flexShrink: 0 }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{cat.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{cat.desc}</p>
                                </div>
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
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Swift Work Process</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Experience a streamlined workflow ensuring a seamless transition through four efficient steps.</p>
                    </div>
                    <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem' }}
                            >
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-serif)', opacity: 0.5 }}>{step.num}</span>
                                <h4 style={{ color: 'var(--accent)', margin: '1rem 0', fontFamily: 'var(--font-serif)', fontSize: '1.3rem' }}>{step.title}</h4>
                                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>{step.desc}</p>
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
                            Join our community of published authors and let our experts guide you to a design that resonates.
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
