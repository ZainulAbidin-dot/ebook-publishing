"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import PursuitImg from '../assets/expertise.png';

export default function GhostwritingExpertise() {
    const { ghostwritingExpertise } = data.pages.home;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2rem', marginBottom: '1.5rem', maxWidth: '1600px', margin: '0 auto 1.5rem' }}
                    >
                        {ghostwritingExpertise.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto 3rem' }}
                    >
                        {ghostwritingExpertise.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}
                    >
                        {ghostwritingExpertise.genres.map((genre, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    border: '1px solid var(--accent)',
                                    borderRadius: '2rem',
                                    color: 'var(--accent)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    cursor: 'default',
                                    transition: 'color 0.2s, background-color 0.2s'
                                }}
                            >
                                {genre}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', height: '400px', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{ fontSize: '4rem', marginBottom: '1rem' }}
                        >
                            <Image src={PursuitImg} alt="Expertise Image" width={600} height={600} style={{ objectFit: 'cover' }} />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{ghostwritingExpertise.professionalLeague.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{ghostwritingExpertise.professionalLeague.description}</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {ghostwritingExpertise.professionalLeague.points.map((point, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="var(--accent)" fillOpacity="0.1" />
                                        <path d="M6 10L9 13L14 8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontWeight: 500 }}>{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
