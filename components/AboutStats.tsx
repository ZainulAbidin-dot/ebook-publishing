"use client";
import React from 'react';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

const StatIcons: { [key: string]: React.ReactNode } = {
    "Years of experience": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    "Books Written": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
    "Books Internationally Acclaimed": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    "Native Writers": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
};

export default function AboutStats() {
    const { stats } = data.pages.about;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '8rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.h6
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '2px' }}
                    >
                        Our Achievement
                    </motion.h6>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title"
                        style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                    >
                        {stats.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem' }}
                    >
                        {stats.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
                    {stats.items.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="card"
                            style={{
                                textAlign: 'center',
                                padding: '3.5rem 2rem',
                                border: '1px solid var(--border)',
                                boxShadow: 'var(--shadow-lg)',
                                backgroundColor: 'var(--bg-main)',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, delay: idx * 0.1 + 0.3 }}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent)',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                <div style={{ width: '30px', height: '30px' }}>
                                    {StatIcons[stat.label] || <span>✨</span>}
                                </div>
                            </motion.div>
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: idx * 0.1 + 0.4 }}
                                    style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 900,
                                        color: 'var(--accent)',
                                        marginBottom: '0.5rem',
                                        lineHeight: 1
                                    }}
                                >
                                    {stat.value}
                                </motion.h3>
                                <p style={{
                                    fontWeight: 700,
                                    color: 'var(--text-main)',
                                    margin: 0,
                                    fontSize: '1rem',
                                    opacity: 0.8
                                }}>{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
