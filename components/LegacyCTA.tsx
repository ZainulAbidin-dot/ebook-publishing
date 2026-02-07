"use client";
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

export default function LegacyCTA() {
    const { legacyCTA } = data.pages.home;
    return (
        <section className="section" style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '8rem 0',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Ambient Light Effect */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        display: 'block',
                        marginBottom: '1.5rem'
                    }}
                >
                    {legacyCTA.limited}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '2rem', lineHeight: 1, maxWidth: '1000px', margin: '0 auto 2rem' }}
                >
                    {legacyCTA.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '4rem', fontWeight: 500, maxWidth: '700px', margin: '0 auto 4rem' }}
                >
                    {legacyCTA.subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <button className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>Get Started Now</button>
                    <button className="btn" style={{
                        border: '2px solid white',
                        background: 'transparent',
                        color: 'white',
                        padding: '1.5rem 4rem',
                        fontSize: '1.2rem'
                    }}>
                        Live Chat
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
