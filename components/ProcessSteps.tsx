"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

export default function ProcessSteps() {
    const { process } = data.pages.home;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                    style={{ maxWidth: '800px', margin: '0 auto 4rem' }}
                >
                    {process.title}
                </motion.h2>
                <div className="grid grid-2" style={{ gap: '4rem' }}>
                    {process.steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 800,
                                color: 'var(--accent)',
                                opacity: 0.2,
                                lineHeight: 1,
                                minWidth: '100px'
                            }}>
                                {step.step.replace('step ', '')}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
