"use client";
import { motion, AnimatePresence } from 'framer-motion';
import data from '../src/data/site-content.json';
import { useState, useEffect } from 'react';

export default function Testimonials() {
    const { testimonials } = data.pages.home;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.reviews.length - visibleItems);

    const nextStep = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevStep = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextStep, 5000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ marginBottom: '1rem' }}
                    >
                        {testimonials.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}
                    >
                        {testimonials.description}
                    </motion.p>
                </div>

                <div style={{ position: 'relative', padding: '0 60px' }}>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div
                            animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            {testimonials.reviews.map((review, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        minWidth: `${100 / visibleItems}%`,
                                        padding: '0 15px',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <div className="card" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem',
                                        border: '1px solid var(--border)',
                                        padding: '2rem',
                                        boxShadow: 'var(--shadow-md)',
                                        height: '100%',
                                        backgroundColor: 'var(--bg-main)'
                                    }}>
                                        <div style={{ color: 'var(--accent)', fontSize: '2.5rem', lineHeight: 1 }}>“</div>
                                        <p style={{
                                            fontSize: '1rem',
                                            fontStyle: 'italic',
                                            color: 'var(--text-main)',
                                            lineHeight: 1.6,
                                            flex: 1
                                        }}>
                                            {review.text}
                                        </p>
                                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--accent)' }}>
                                            — {review.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevStep}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--accent)',
                            fontSize: '1.2rem'
                        }}
                    >
                        ←
                    </button>
                    <button
                        onClick={nextStep}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--accent)',
                            fontSize: '1.2rem'
                        }}
                    >
                        →
                    </button>
                </div>

                {/* Dots Navigation */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2.5rem' }}>
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                width: currentIndex === idx ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                border: 'none',
                                background: currentIndex === idx ? 'var(--accent)' : 'var(--border)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
