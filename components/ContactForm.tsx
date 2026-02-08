"use client";
import React from 'react';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

export default function ContactForm() {
    const { form } = data.pages.contact;
    const { contact } = data.brand;

    return (
        <section className="section" style={{
            backgroundColor: 'var(--bg-main)',
            position: 'relative',
            padding: 'var(--section-padding) 0',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    y: [0, 50, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.03)',
                    filter: 'blur(80px)',
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
                    {/* Left Side: Text and Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h6
                            style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '3px', fontSize: '0.9rem' }}
                        >
                            Let's Connect
                        </motion.h6>
                        <motion.h2
                            className="section-title"
                            style={{ textAlign: 'left', marginBottom: '1.5rem', lineHeight: 1.1, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                        >
                            {form.title}
                        </motion.h2>
                        <motion.p
                            style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '3.5rem', maxWidth: '500px' }}
                        >
                            {form.description}
                        </motion.p>

                        <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
                            {[
                                {
                                    label: "Email Address",
                                    value: contact.email,
                                    href: `mailto:${contact.email}`,
                                    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                },
                                {
                                    label: "Phone Number",
                                    value: contact.phone,
                                    href: `tel:${contact.phone.replace(/\s/g, '')}`,
                                    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        alignItems: 'center',
                                        padding: '1.5rem',
                                        borderRadius: '1.5rem',
                                        backgroundColor: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: 'rgba(99, 102, 241, 0.15)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent)',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>{item.label}</span>
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>{item.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontWeight: 700, color: 'var(--text-muted)', marginRight: '1rem' }}>Follow Us:</span>
                            {[
                                { name: 'facebook', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                                { name: 'twitter', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg> },
                                { name: 'instagram', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S1 3.35 .63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.266.057-1.645.07-4.848.07s-3.584-.015-4.85-.074c-1.17-.061-1.805-.256-2.227-.421-.562-.224-.96-.479-1.382-.899-.419-.419-.679-.824-.896-1.38-.164-.42-.36-1.065-.413-2.235-.057-1.266-.07-1.645-.07-4.848s.015-3.584.074-4.85c.061-1.17.256-1.805.421-2.227.224-.562.479-.96.899-1.382.419-.419.824-.679 1.38-.896.42-.164 1.065-.36 2.235-.413 1.266-.057 1.645-.07 4.848-.07zM12 5.837a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg> },
                                { name: 'linkedin', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg> }
                            ].map((social) => (
                                <motion.a
                                    key={social.name}
                                    whileHover={{ y: -5, color: 'var(--accent)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    href="#"
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(30px)',
                            padding: 'var(--container-padding)',
                            borderRadius: '3rem',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <form style={{ display: 'grid', gap: '2.5rem' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Full Name</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01, borderColor: 'var(--accent)' }}
                                        type="text"
                                        placeholder="John Doe"
                                        style={{
                                            padding: '1.25rem 1.5rem',
                                            borderRadius: '1.25rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Email Address</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01, borderColor: 'var(--accent)' }}
                                        type="email"
                                        placeholder="john@example.com"
                                        style={{
                                            padding: '1.25rem 1.5rem',
                                            borderRadius: '1.25rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'var(--text-main)',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Phone Number</label>
                                <motion.input
                                    whileFocus={{ scale: 1.01, borderColor: 'var(--accent)' }}
                                    type="tel"
                                    placeholder="+1 234 567 890"
                                    style={{
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '1.25rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Your Message</label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01, borderColor: 'var(--accent)' }}
                                    placeholder="How can we help you?"
                                    rows={5}
                                    style={{
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '1.25rem',
                                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        resize: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-hover)' }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary"
                                style={{
                                    padding: '1.25rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 900,
                                    borderRadius: '1.25rem',
                                    marginTop: '1rem',
                                    boxShadow: '0 15px 30px rgba(99, 102, 241, 0.3)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    width: '100%'
                                }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
