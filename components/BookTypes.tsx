"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

export default function BookTypes() {
    const { bookTypes } = data.pages.home;
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}
                >
                    Exceptional Book Writing Services!
                </motion.h3>
                <div className="flex justify-center gap-4 flex-wrap">
                    {bookTypes.map((type, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="card"
                            style={{ textAlign: 'center', flex: '1 1 250px', maxWidth: '300px' }}
                        >
                            <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{type.title}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{type.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
