"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import Image from 'next/image';
import MarketingImg from '../assets/exceptional-book.webp';

export default function MarketingDetail() {
    const { marketingDetail } = data.pages.home;
    return (
        <section className="section" style={{
            backgroundColor: 'var(--bg-main)',
            overflow: 'hidden',
            padding: '10rem 0'
        }}>
            <div className="container">
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                marginBottom: '2rem',
                                fontFamily: 'var(--font-serif)',
                                color: 'var(--primary)',
                                fontSize: '2.75rem',
                                lineHeight: 1.2
                            }}
                        >
                            {marketingDetail.title}
                        </motion.h2>
                        <p style={{
                            color: 'var(--text-muted)',
                            marginBottom: '3rem',
                            lineHeight: 1.8,
                            fontSize: '1.1rem'
                        }}>
                            {marketingDetail.description}
                        </p>
                        <div className="grid grid-cols-2" style={{ gap: '1.25rem' }}>
                            {marketingDetail.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.05 }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                                >
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent)',
                                        flexShrink: 0
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            style={{ marginTop: '4rem' }}
                        >
                            <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
                                Start Marketing Now
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        {/* Decorative background element */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0) 70%)',
                            zIndex: 0,
                            borderRadius: '50%'
                        }} />

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            <Image
                                src={MarketingImg}
                                alt="Marketing Visualization"
                                width={600}
                                height={700}
                                style={{
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.12))',
                                    borderRadius: '1.5rem'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
