"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import BgImage from '../assets/about-us-hero.webp';
import Pattern from '../assets/pattern-2.webp';

export default function AboutHero() {
    const { hero } = data.pages.about;
    return (
        <section className="section" style={{
            position: 'relative',
            padding: 'var(--section-padding) 0',
            overflow: 'hidden',
            backgroundColor: 'var(--primary)',
            color: 'white'
        }}>
            {/* Background Image with Pattern Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0
            }}>
                <Image
                    src={BgImage}
                    alt="About Us"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.1, filter: 'grayscale(100%)' }}
                    priority
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${Pattern.src})`,
                    backgroundSize: '600px',
                    opacity: 0.05
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.h6
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        color: 'var(--accent)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        letterSpacing: '3px'
                    }}
                >
                    A Company You Can Trust
                </motion.h6>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                        maxWidth: '1000px',
                        margin: '0 auto clamp(1.5rem, 4vw, 2rem)',
                        lineHeight: 1.1
                    }}
                >
                    {hero.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '850px',
                        margin: '0 auto clamp(2rem, 5vw, 3rem)',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.8
                    }}
                >
                    {hero.subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: 'flex',
                        gap: 'clamp(0.75rem, 2vw, 1rem)',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                        style={{
                            padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(2rem, 5vw, 3.5rem)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            minWidth: 'clamp(160px, 40vw, 200px)'
                        }}
                    >
                        {hero.cta}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn"
                        style={{
                            padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(2rem, 5vw, 3.5rem)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            minWidth: 'clamp(160px, 40vw, 200px)',
                            border: '2px solid white',
                            color: 'white',
                            background: 'transparent'
                        }}
                    >
                        Live Chat
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
