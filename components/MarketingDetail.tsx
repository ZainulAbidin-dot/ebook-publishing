"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import Image from 'next/image';
import MarketingImg from '../assets/marketing.png';

export default function MarketingDetail() {
    const { marketingDetail } = data.pages.home;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{marketingDetail.title}</h2>
                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>{marketingDetail.description}</p>
                        <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                            {marketingDetail.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}
                                >
                                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', height: '450px', backgroundColor: 'var(--bg-main)', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{ fontSize: '4rem', marginBottom: '1rem' }}
                            >
                                <Image src={MarketingImg} alt="Marketing" />
                            </motion.div>
                            <p style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-main)' }}>Marketing Analysis</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Data-Driven Strategies</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
