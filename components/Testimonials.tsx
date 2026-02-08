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
        const timer = setInterval(nextStep, 6000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden', padding: '8rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)', fontSize: '2.5rem' }}
                    >
                        {testimonials.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}
                    >
                        {testimonials.description}
                    </motion.p>
                </div>

                <div style={{ position: 'relative', padding: '0 40px' }}>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div
                            animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
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
                                        padding: '0 20px',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <div className="card" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2rem',
                                        border: '1px solid var(--border)',
                                        padding: '3rem 2.5rem',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                                        height: '100%',
                                        backgroundColor: 'white',
                                        borderRadius: '1.5rem',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '2rem',
                                            right: '2.5rem',
                                            color: 'var(--accent)',
                                            fontSize: '4rem',
                                            lineHeight: 1,
                                            opacity: 0.2,
                                            fontFamily: 'var(--font-serif)'
                                        }}>“</div>

                                        <div style={{ display: 'flex', gap: '4px', marginBottom: '-0.5rem' }}>
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="var(--accent)">
                                                    <path d="M10 1L13 7L19 8L15 13L16 19L10 16L4 19L5 13L1 8L7 7L10 1z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: 'var(--text-main)',
                                            lineHeight: 1.8,
                                            flex: 1,
                                            fontWeight: 500
                                        }}>
                                            {review.text}
                                        </p>
                                        <div style={{
                                            borderTop: '1px solid var(--border)',
                                            paddingTop: '1.5rem',
                                            fontWeight: 800,
                                            fontSize: '1rem',
                                            color: 'var(--primary)',
                                            fontFamily: 'var(--font-serif)',
                                            letterSpacing: '0.5px'
                                        }}>
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
                            left: '-10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '50%',
                            width: '52px',
                            height: '52px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            color: 'var(--primary)',
                            fontSize: '1.4rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        ←
                    </button>
                    <button
                        onClick={nextStep}
                        style={{
                            position: 'absolute',
                            right: '-10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '50%',
                            width: '52px',
                            height: '52px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            color: 'var(--primary)',
                            fontSize: '1.4rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        →
                    </button>
                </div>

                {/* Dots Navigation */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '4rem' }}>
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                width: currentIndex === idx ? '32px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
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
