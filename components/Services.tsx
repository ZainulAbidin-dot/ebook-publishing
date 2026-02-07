"use client";
import React from 'react';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

const ServiceIcons: { [key: string]: React.ReactNode } = {
    "eBook Writing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
    "Proofreading Services": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    "Book Editing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
    "Book Formatting": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M9 12h6" /><path d="M9 16h6" /><path d="M4 11h16" /><path d="M20 20v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" /></svg>,
    "Video Trailer": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /></svg>,
    "Audio Book": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>,
    "Book Cover Designing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
    "Author's Website": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    "Book Publishing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    "Book Marketing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
};

export default function Services() {
    const { servicesOverview } = data.pages.home;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-main)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ marginBottom: '1rem' }}
                    >
                        {servicesOverview.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}
                    >
                        {servicesOverview.description}
                    </motion.p>
                </div>
                <div className="grid grid-3" style={{ gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {servicesOverview.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover="hover"
                            className="card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                padding: '2rem 1.75rem',
                                position: 'relative',
                                cursor: 'pointer',
                                height: '100%',
                                border: '1px solid var(--border)',
                                borderRadius: '1.25rem',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                variants={{
                                    hover: {
                                        scale: 1.1,
                                        rotate: [0, -5, 5, 0],
                                        backgroundColor: 'var(--accent)',
                                        color: 'white'
                                    }
                                }}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: 'rgba(99, 102, 241, 0.08)',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent)',
                                    marginBottom: '0.25rem',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    flexShrink: 0
                                }}
                            >
                                <div style={{ width: '24px', height: '24px' }}>
                                    {ServiceIcons[item.title] || <span>{idx + 1}</span>}
                                </div>
                            </motion.div>

                            <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>{item.title}</h4>
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                margin: 0,
                                lineHeight: 1.6,
                                flexGrow: 1
                            }}>
                                {item.description}
                            </p>

                            <motion.div
                                variants={{
                                    hover: { x: 5, opacity: 1 }
                                }}
                                initial={{ x: 0, opacity: 0.8 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent)',
                                    fontWeight: 700,
                                    fontSize: '0.85rem'
                                }}
                            >
                                Explorer Details
                                <span style={{ fontSize: '1.1rem' }}>→</span>
                            </motion.div>

                            {/* Background Numbering */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-10px',
                                fontSize: '6rem',
                                fontWeight: 900,
                                color: 'var(--accent)',
                                opacity: 0.03,
                                pointerEvents: 'none',
                                zIndex: 0
                            }}>
                                {idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
