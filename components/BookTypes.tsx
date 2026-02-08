"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

export default function BookTypes() {
    const { bookTypes } = data.pages.home;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-main)', padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--primary)',
                        fontWeight: 800
                    }}
                >
                    Exceptional Book Writing Services!
                </motion.h3>
                <div className="flex justify-center gap-6 flex-wrap">
                    {bookTypes.map((type, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12, transition: { duration: 0.3 } }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="card"
                            style={{
                                textAlign: 'center',
                                flex: '1 1 280px',
                                maxWidth: '320px',
                                padding: '3rem 2rem',
                                border: '1px solid var(--border)',
                                borderBottom: `4px solid var(--accent)`,
                                borderRadius: '1rem',
                                background: 'white',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}
                        >
                            <h4 style={{
                                color: 'var(--primary)',
                                marginBottom: '1.25rem',
                                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                                fontWeight: 800,
                                fontFamily: 'var(--font-serif)'
                            }}>
                                {type.title}
                            </h4>
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '1rem',
                                lineHeight: 1.7
                            }}>
                                {type.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
