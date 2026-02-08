"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import BannerImg from '../assets/about-us-hero.webp'; // Using expertise image as banner

export default function AboutHero() {
    const { hero } = data.pages.about;
    return (
        <section className="section" style={{
            minHeight: 'min(70vh, 600px)',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: 'clamp(6rem, 15vw, 10rem) 0 clamp(3rem, 8vw, 6rem)',
            textAlign: 'center',
            overflow: 'hidden',
            color: 'white'
        }}>
            {/* Background Image Banner with Ken Burns Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0
                }}
            >
                <Image
                    src={BannerImg}
                    alt="About Us Banner"
                    fill
                    priority
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </motion.div>

            {/* Premium Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
                zIndex: 1
            }} />

            {/* Animated Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.2 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'clamp(300px, 60vw, 600px)',
                    height: 'clamp(300px, 60vw, 600px)',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    filter: 'blur(150px)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        padding: 'clamp(1.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)',
                        borderRadius: 'clamp(1rem, 3vw, 2.5rem)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}
                >
                    <motion.h6
                        initial={{ opacity: 0, letterSpacing: '0px' }}
                        animate={{ opacity: 1, letterSpacing: '4px' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: 'var(--accent)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)',
                            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        A company you can trust
                    </motion.h6>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                            fontWeight: 900,
                            lineHeight: 1.2,
                            marginBottom: 'clamp(1rem, 3vw, 2rem)',
                            margin: '0 auto clamp(1rem, 3vw, 2rem)',
                            maxWidth: '1200px',
                            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
                        }}
                    >
                        {hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: '850px',
                            margin: '0 auto clamp(1.5rem, 4vw, 2.5rem)',
                            lineHeight: 1.7,
                            textShadow: '0 2px 10px rgba(0,0,0,0.4)'
                        }}
                    >
                        {hero.subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        style={{
                            display: 'flex',
                            gap: 'clamp(0.5rem, 2vw, 1rem)',
                            marginBottom: 'clamp(1rem, 3vw, 3rem)',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            style={{
                                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                                minWidth: 'clamp(140px, 30vw, 180px)',
                                boxShadow: '0 8px 30px rgba(99, 102, 241, 0.3)'
                            }}
                        >
                            {hero.cta}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn"
                            style={{
                                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
                                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                                minWidth: 'clamp(140px, 30vw, 180px)',
                                border: '1px solid rgba(255,255,255,0.5)',
                                color: 'white',
                                background: 'transparent'
                            }}
                        >
                            Live Chat
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Refined Scroll Indicator - Hidden on small screens */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator-desktop"
                style={{
                    position: 'absolute',
                    bottom: 'clamp(1rem, 3vw, 2rem)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                <motion.div
                    animate={{
                        boxShadow: ['0 0 0px var(--accent)', '0 0 20px var(--accent)', '0 0 0px var(--accent)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        width: '24px',
                        height: '40px',
                        border: '2px solid rgba(255,255,255,0.5)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '6px'
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: '4px',
                            height: '8px',
                            backgroundColor: 'var(--accent)',
                            borderRadius: '2px',
                            boxShadow: '0 0 10px var(--accent)'
                        }}
                    />
                </motion.div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
            </motion.div>

            <style jsx global>{`
                @media (max-width: 600px) {
                    .scroll-indicator-desktop {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
