"use client";
import { motion, AnimatePresence } from 'framer-motion';
import data from '../src/data/site-content.json';
import { useState } from 'react';

export default function FAQs() {
    const { faqs } = data.pages.home;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                    style={{ marginBottom: '3rem' }}
                >
                    {faqs.title}
                </motion.h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                border: '1px solid var(--border)',
                                borderRadius: '0.75rem',
                                overflow: 'hidden',
                                backgroundColor: 'var(--bg-secondary)'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '1.25rem',
                                    background: 'none',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    color: 'var(--text-main)'
                                }}
                            >
                                {item.question}
                                <motion.span
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    style={{ color: 'var(--accent)', fontSize: '0.8rem' }}
                                >
                                    ▼
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 1.25rem 1.25rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
