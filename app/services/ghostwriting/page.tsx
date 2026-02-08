"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../../../src/data/site-content.json';
import BgImage from '../../../assets/expertise.png';
import Pattern from '../../../assets/pattern-2.webp';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ServicePage() {
    const serviceTitle = "Engaging Content and Affordable Ghostwriting Services";
    const serviceSubtitle = "Begin your journey into the literary world with top notch ghostwriters who will take the crux of your ideas and transform them into a masterpiece that will significantly help you as an author in becoming a legend!";

    const genres = [
        {
            title: "Fiction",
            desc: "Our expert literary craftsmen will weave a tapestry of emotions into the pages of your magnificent fiction novel. Whether it's fantasy or science fiction, our experts have the touch of gold."
        },
        {
            title: "Informative",
            desc: "Delving into the annals of history or analyzing societal change, our informative writers create engaging content that captivates readers with significant narratives."
        },
        {
            title: "Memoir",
            desc: "A life well lived should be shared. Our memoir writing services capture the journey of overcoming odds and emerging triumphant through valuable insights."
        },
        {
            title: "Children's Book",
            desc: "Immerse young minds in wonder. Our writers craft lovable characters who ignite imagination and inspire literary adventures for young readers."
        },
        {
            title: "Self Help",
            desc: "A guiding light to personal growth, inner peace, and fulfillment. Through deep introspection and actionable insights, your audience will be compelled to delve within."
        },
        {
            title: "Biography",
            desc: "Capturing the essence of authenticity and emotional resonance. Our biography services delve into the layers of an individual's character and contributions."
        }
    ];

    const benefits = [
        {
            title: "Seal of Approval",
            desc: "Genuine work with our seal of approval and guarantee of authenticity."
        },
        {
            title: "In-depth Review",
            desc: "Ensuring work is thoroughly edited with no mistakes through our rigorous system."
        },
        {
            title: "Unlimited Revisions",
            desc: "We allow as many revisions as possible to ensure your total satisfaction."
        },
        {
            title: "Ownership Rights",
            desc: "You maintain 100% of the rights to your book; we hold no claim to your IP."
        }
    ];

    const steps = [
        {
            num: "01",
            title: "Placing Your Order",
            desc: "Start the process by choosing the ghostwriting services that suit your needs, from fiction to business books."
        },
        {
            num: "02",
            title: "Draft of the Outline",
            desc: "Our writers draft an outline that maps the entire plot, ensuring your vision is being utilized exactly as you want."
        },
        {
            num: "03",
            title: "Your Feedback",
            desc: "Review the work and discuss satisfaction. This crucial step establishes if changes, proofreading, or editing are needed."
        },
        {
            num: "04",
            title: "Final Delivery",
            desc: "The hard work and dedication culminate in the delivery of a well-written novel that you now fully own."
        }
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
                        alt="Ghostwriting"
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
                            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
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

            {/* Introduction & Benefits */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}
                        >
                            Our Team Will Create Perfection!
                        </motion.h2>
                        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            Express Book Publishers exists as the sole leader of affordable ghostwriting services in today&apos;s dynamic landscape. Compelling content is a must to survive in the market today as it&apos;s necessary to grab your audience&apos;s attention as soon as possible.
                        </p>
                    </div>

                    <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="card"
                                style={{ textAlign: 'center', borderBottom: '4px solid var(--accent)' }}
                            >
                                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{benefit.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Genre Showcase */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Expert Writing Across All Genres</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Discover excellence with our outstanding wordsmiths</p>
                    </div>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {genres.map((genre, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass"
                                style={{
                                    padding: '2.5rem',
                                    borderRadius: '2rem',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    background: 'white',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                                }}
                            >
                                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{genre.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{genre.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${Pattern.src})`,
                    backgroundSize: '400px',
                    opacity: 0.1,
                    zIndex: 0
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>The Fastest Work Process</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.1rem' }}>Complete your work in four easy steps with our efficient delivery system.</p>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    padding: '2.5rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '2rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}
                            >
                                <span style={{
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    color: 'var(--accent)',
                                    fontFamily: 'var(--font-serif)',
                                    fontStyle: 'italic',
                                    opacity: 0.6
                                }}>
                                    {step.num}
                                </span>
                                <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>{step.title}</h4>
                                <p style={{ opacity: 0.8, lineHeight: 1.7 }}>{step.desc}</p>
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
                        style={{ padding: 'clamp(4rem, 10vw, 6rem) var(--container-padding)', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '3rem' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>READY TO WRITE YOUR LEGACY?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem', opacity: 0.8, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                            Join our community of published authors and let our experts guide you to success. Speak with our experts today.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', width: 'clamp(200px, 100%, 300px)' }}>Get Started Now</button>
                            <button className="btn" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', border: '2px solid white', color: 'white', width: 'clamp(200px, 100%, 300px)', background: 'transparent' }}>Live Chat</button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
