"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import BannerImg from '../assets/expertise.png'; // Using expertise image for contact as well

export default function ContactHero() {
    const { hero } = data.pages.contact;
    return (
        <section className="section" style={{
            minHeight: '40vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: 'var(--section-padding) 0',
            textAlign: 'center',
            overflow: 'hidden',
            color: 'white'
        }}>
            {/* Background Image Banner */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
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
                    alt="Contact Us Banner"
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
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
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
                    width: '600px',
                    height: '600px',
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
                        padding: '4rem 2rem',
                        borderRadius: '2.5rem',
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
                            marginBottom: '1.5rem',
                            fontSize: '1rem',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        Contact Us
                    </motion.h6>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            margin: '0 auto 2rem',
                            maxWidth: '900px',
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
                            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: '850px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            textShadow: '0 2px 10px rgba(0,0,0,0.4)'
                        }}
                    >
                        {hero.subtitle}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
