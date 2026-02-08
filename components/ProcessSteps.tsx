"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import Image from 'next/image';
import ProcessBg from '../assets/amazing-bg.webp';

export default function ProcessSteps() {
    const { process } = data.pages.home;
    return (
        <section className="section" style={{
            backgroundColor: 'var(--primary)',
            position: 'relative',
            overflow: 'hidden',
            padding: 'var(--section-padding) 0'
        }}>
            <Image
                src={ProcessBg}
                alt="Process Background"
                fill
                style={{ objectFit: 'cover', opacity: 0.15 }}
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0, 61, 51, 0.9) 0%, rgba(0, 61, 51, 0.7) 100%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                    style={{
                        maxWidth: '900px',
                        margin: '0 auto clamp(3rem, 8vw, 6rem)',
                        fontFamily: 'var(--font-serif)',
                        color: 'white',
                        fontSize: 'clamp(2rem, 5vw, 3rem)'
                    }}
                >
                    {process.title}
                </motion.h2>
                <div className="grid" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 100%, 1fr), 1fr))' }}>
                    {process.steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass"
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '2rem',
                                alignItems: 'flex-start',
                                padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)',
                                borderRadius: '2rem',
                                transition: 'all 0.4s ease',
                                textAlign: 'left',
                                height: '100%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'white'
                            }}
                        >
                            <div style={{
                                fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                                fontWeight: 900,
                                color: 'var(--accent)',
                                opacity: 0.8,
                                lineHeight: 1,
                                minWidth: '80px',
                                fontFamily: 'var(--font-serif)',
                                fontStyle: 'italic'
                            }}>
                                {step.step.replace('step ', '')}
                            </div>
                            <div style={{ flex: '1 1 300px' }}>
                                <h4 style={{
                                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                                    marginBottom: '1rem',
                                    color: 'var(--accent)',
                                    fontWeight: 800,
                                    fontFamily: 'var(--font-serif)'
                                }}>
                                    {step.title}
                                </h4>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '1rem',
                                    lineHeight: 1.8
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
