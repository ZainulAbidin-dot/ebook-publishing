"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgImage from '../../../assets/pursuit-img.webp';
import Pattern from '../../../assets/pattern-2.webp';

export default function ChildrensBookPage() {
    const serviceTitle = "Children's Book Publishing";
    const serviceSubtitle = "Where Imagination Comes to Life";
    const serviceDescription = "Specialized services for children's literature, combining captivating storytelling with vibrant illustrations to create magical reading experiences that inspire young minds.";

    const services = [
        { icon: "✍️", title: "Story Development", description: "Age-appropriate narratives crafted by writers who understand how children think, learn, and dream." },
        { icon: "🎨", title: "Custom Illustrations", description: "Vibrant, colorful artwork created by talented illustrators to bring your characters and worlds to life." },
        { icon: "📖", title: "Book Design & Layout", description: "Professional formatting optimized for various age groups, from board books to chapter books." },
        { icon: "🖨️", title: "Quality Printing", description: "Premium printing options including durable board books, hardcovers, and paperbacks with child-safe materials." },
        { icon: "📚", title: "Publishing & Distribution", description: "Get your book into bookstores, schools, and libraries worldwide with our distribution network." },
        { icon: "📢", title: "Marketing Support", description: "Targeted marketing strategies to reach parents, educators, and young readers." }
    ];

    const ageGroups = [
        { age: "0-3", title: "Board Books", description: "Sturdy, durable books with simple images and minimal text for babies and toddlers.", features: ["Thick pages", "Simple concepts", "High-contrast images"] },
        { age: "3-5", title: "Picture Books", description: "Illustrated stories that engage preschoolers with colorful artwork and simple narratives.", features: ["32-40 pages", "Large illustrations", "Rhythmic text"] },
        { age: "5-8", title: "Early Readers", description: "Transitional books helping children move from picture books to reading independently.", features: ["Short chapters", "Easy vocabulary", "Some illustrations"] },
        { age: "8-12", title: "Middle Grade", description: "Chapter books with more complex plots and characters for confident young readers.", features: ["100-300 pages", "Complex themes", "Character development"] }
    ];

    const illustrationStyles = [
        { title: "Whimsical Watercolor", description: "Soft, dreamy illustrations perfect for magical and fantasy stories." },
        { title: "Bold Digital Art", description: "Vibrant, clean digital illustrations ideal for modern and adventure tales." },
        { title: "Classic Hand-Drawn", description: "Detailed pencil or ink drawings for timeless, vintage-feeling stories." },
        { title: "Cartoon Style", description: "Fun, expressive character designs perfect for humorous and educational books." }
    ];

    const processSteps = [
        { step: "01", title: "Concept & Story", description: "We work with you to develop your story idea, characters, and overall vision for the book." },
        { step: "02", title: "Illustration Design", description: "Our artists create sample illustrations and character designs for your approval." },
        { step: "03", title: "Book Production", description: "Full illustration, layout, editing, and design to create a publication-ready book." },
        { step: "04", title: "Print & Publish", description: "High-quality printing and distribution to get your book into readers' hands." }
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
                        <a href="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Start Your Book</a>
                        <a href="tel:+18001234567" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem', borderColor: 'white', color: 'white' }}>Call Now</a>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Complete Children's Book Services</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>From concept to bookshelf, we provide everything you need to create a magical children's book.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {services.map((service, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card" style={{ padding: '2rem', borderRadius: '1rem', backgroundColor: 'var(--bg-main)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Age Groups */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Books for Every Age Group</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>We create books tailored to each developmental stage, ensuring age-appropriate content and design.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {ageGroups.map((group, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '1.5rem', overflow: 'hidden' }}>
                                <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>Ages {group.age}</div>
                                    <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{group.title}</h3>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{group.description}</p>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {group.features.map((feature, fIdx) => (
                                            <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Illustration Styles */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1.5rem' }}>Beautiful Illustration Styles</h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>Our talented illustrators work in various styles to match your story's tone and appeal to your target audience.</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                {illustrationStyles.map((style, idx) => (
                                    <div key={idx} style={{ padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border)' }}>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{style.title}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{style.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', height: 'clamp(300px, 50vw, 500px)', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <Image src={BgImage} alt="Illustration Styles" fill style={{ objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>How We Create Your Book</h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>Our streamlined process brings your children's book from idea to reality.</p>
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
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Ready to Inspire Young Minds?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>Let's create a children's book that sparks imagination and creates lasting memories.</p>
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
