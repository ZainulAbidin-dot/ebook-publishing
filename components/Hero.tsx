"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';
import HeroImg from '../assets/hero.png';
import Image from 'next/image';

export default function Hero() {
    const { hero } = data.pages.home;
    return (
        <section className="section" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '4rem 0',
            overflow: 'hidden',
            backgroundColor: 'var(--primary)',
            color: 'white'
        }}>
            {/* Background Image with Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                zIndex: 0
            }}>
                <Image
                    src={HeroImg}
                    alt="Hero Background"
                    fill
                    priority
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, var(--primary) 0%, rgba(0, 61, 51, 0.8) 40%, transparent 100%)',
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ maxWidth: '700px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            color: 'var(--accent)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            {hero.description}
                        </span>
                        <h1 className="hero-title" style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            fontFamily: 'var(--font-serif)'
                        }}>
                            {hero.title}
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            fontWeight: 400,
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: '3rem',
                            lineHeight: 1.6
                        }}>
                            {hero.subtitle}
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', backgroundColor: 'var(--accent)', color: 'var(--primary)', fontWeight: 800 }}>
                                {hero.cta}
                            </button>
                            <button className="btn" style={{
                                padding: '1.25rem 3rem',
                                fontSize: '1.1rem',
                                border: '2px solid white',
                                color: 'white',
                                background: 'transparent',
                                fontWeight: 700
                            }}>
                                Live Chat
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
