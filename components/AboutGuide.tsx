"use client";
import React from 'react';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import Image from 'next/image';
import PursuitImg from '../assets/pursuit-img.webp'; // Reusing existing premium image

export default function AboutGuide() {
    const { guide } = data.pages.about;
    return (
        <section className="section" style={{
            backgroundColor: 'var(--bg-main)',
            overflow: 'hidden',
            position: 'relative',
            padding: '8rem 0'
        }}>
            {/* Decorative Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.02,
                backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                pointerEvents: 'none'
            }} />

            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            style={{ width: '100%', height: '100%', position: 'relative' }}
                        >
                            <Image src={PursuitImg} alt="Author Guide" fill style={{ objectFit: 'cover' }} />
                        </motion.div>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))'
                        }} />

                        {/* Overlaid Floating Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                right: '1.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(10px)',
                                padding: '1rem 1.5rem',
                                borderRadius: '12px',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                zIndex: 10
                            }}
                        >
                            <div style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: 'var(--accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span style={{ fontWeight: 800, color: '#1a1a1a', fontSize: '0.9rem' }}>Certified Experts</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.h6
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '2px', fontSize: '0.9rem' }}
                        >
                            Our Philosophy
                        </motion.h6>
                        <motion.h2
                            className="section-title"
                            style={{ marginBottom: '1.5rem', textAlign: 'left', lineHeight: 1.2, fontSize: 'clamp(1.8rem, 4vw, 2.2rem)' }}
                        >
                            {guide.title}
                        </motion.h2>
                        <motion.p
                            style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.1rem', marginBottom: '2rem' }}
                        >
                            {guide.description}
                        </motion.p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
                            {[
                                { title: "Creative Vision", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" /></svg> },
                                { title: "Strategic Execution", icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.2) }}
                                    whileHover={{ x: 5 }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                                >
                                    <div style={{
                                        width: '45px',
                                        height: '45px',
                                        backgroundColor: 'rgba(99, 102, 241, 0.08)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent)',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
