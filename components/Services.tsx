"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import data from '../src/data/site-content.json';
import Pattern from '../assets/pattern-2.webp';

const ServiceIcons: { [key: string]: React.ReactNode } = {
    "Ghostwriting": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    "Editing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
    "Formatting": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M9 12h6" /><path d="M9 16h6" /><path d="M4 11h16" /><path d="M20 20v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" /></svg>,
    "Book Publishing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    "Children's Book": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    "Book Marketing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
    "Proofreading": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    "Book Cover Design": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
    "Book Printing": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
};

export default function Services() {
    const { servicesOverview } = data.pages.home;
    return (
        <section className="section" style={{
            backgroundColor: 'var(--primary)',
            padding: '10rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${Pattern.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: '1800px',
                opacity: 0.1,
                zIndex: 0,

            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{
                            marginBottom: '2rem',
                            fontFamily: 'var(--font-serif)',
                            color: 'white',
                            fontSize: '3.5rem'
                        }}
                    >
                        {servicesOverview.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '900px',
                            margin: '0 auto',
                            fontSize: '1.2rem',
                            lineHeight: 1.8
                        }}
                    >
                        {servicesOverview.description}
                    </motion.p>
                </div>
                <div className="grid grid-3" style={{ gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {servicesOverview.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover="hover"
                            className="glass"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                padding: '3.5rem 2.5rem',
                                position: 'relative',
                                cursor: 'default',
                                height: '100%',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '2rem',
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.4s ease'
                            }}
                        >
                            <motion.div
                                variants={{
                                    hover: {
                                        scale: 1.1,
                                        backgroundColor: 'var(--accent)',
                                        color: 'var(--primary)'
                                    }
                                }}
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent)',
                                    marginBottom: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    flexShrink: 0
                                }}
                            >
                                <div style={{ width: '32px', height: '32px' }}>
                                    {ServiceIcons[item.title] || <span>{idx + 1}</span>}
                                </div>
                            </motion.div>

                            <h4 style={{
                                margin: 0,
                                fontSize: '1.75rem',
                                fontWeight: 800,
                                color: 'var(--accent)',
                                fontFamily: 'var(--font-serif)'
                            }}>
                                {item.title}
                            </h4>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '1.05rem',
                                margin: 0,
                                lineHeight: 1.8,
                                flexGrow: 1
                            }}>
                                {item.description}
                            </p>

                            <Link
                                href={data.navigation.find(nav => nav.name === "Services")?.subItems?.find(sub => sub.name === item.title)?.path || '#'}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    color: 'var(--accent)',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    marginTop: '1.5rem',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                            >
                                <motion.div
                                    variants={{
                                        hover: { gap: '1rem', color: 'white' }
                                    }}
                                    style={{ display: 'flex', alignItems: 'center', gap: 'inherit' }}
                                >
                                    View Details
                                    <span style={{ fontSize: '1.4rem' }}>→</span>
                                </motion.div>
                            </Link>

                            {/* Background Numbering */}
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '25px',
                                fontSize: '6rem',
                                fontWeight: 900,
                                color: 'white',
                                opacity: 0.05,
                                pointerEvents: 'none',
                                zIndex: 0,
                                fontFamily: 'var(--font-serif)',
                                fontStyle: 'italic'
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
