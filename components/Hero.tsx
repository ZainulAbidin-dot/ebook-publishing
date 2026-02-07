"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import HeroImg from '../assets/hero.png';
import Image from 'next/image';

export default function Hero() {
    const { hero } = data.pages.home;
    return (
        <section className="section" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '8rem 0',
            textAlign: 'center',
            overflow: 'hidden',
            color: 'white' // Better contrast on dark overlay
        }}>
            {/* Background Image */}
            <Image
                src={HeroImg}
                alt="Hero Background"
                fill
                priority
                style={{
                    objectFit: 'cover',
                }}
            />

            {/* Dark Overlay for Readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }} />

            {/* Animated Background Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.2 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    filter: 'blur(150px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-title"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 3.5rem)',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        maxWidth: '1600px',
                        margin: '0 auto 1.5rem',
                        lineHeight: 1.1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}
                >
                    {hero.title}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '3rem',
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)'
                    }}
                >
                    {hero.subtitle}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)' }}>{hero.cta}</button>
                    <button className="btn" style={{
                        padding: '1.25rem 3rem',
                        fontSize: '1.1rem',
                        border: '2px solid white',
                        color: 'white',
                        background: 'transparent'
                    }}>Live Chat</button>
                </motion.div>
            </div>
        </section>
    );
}
