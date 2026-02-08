"use client";
import React from 'react';
import { motion } from 'framer-motion';
import data from '../src/data/site-content.json';

interface HeroFormProps {
    defaultService?: string;
}

export default function HeroForm({ defaultService = "" }: HeroFormProps) {
    const { servicesOverview } = data.pages.home;

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ced4da',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        marginBottom: '1rem',
        color: '#212529'
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                color: '#212529'
            }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                }}>
                    What services are you looking for?
                </h3>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#6c757d',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                }}>
                    Fill the form below to get a custom quote.
                </p>

                <form onSubmit={(e) => e.preventDefault()}>
                    <select
                        defaultValue={defaultService}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                        <option value="">Select Service*</option>
                        {servicesOverview.items.map((item, idx) => (
                            <option key={idx} value={item.title.toLowerCase().replace(/\s+/g, '-')}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <input type="text" placeholder="Your Name*" style={inputStyle} required />
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1rem' }}>
                        <input type="tel" placeholder="Phone No.*" style={inputStyle} required />
                        <input type="email" placeholder="Email Address*" style={inputStyle} required />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            padding: '1.1rem',
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            borderRadius: '0.625rem',
                            marginTop: '0.5rem',
                            boxShadow: '0 10px 20px rgba(245, 158, 11, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Get Started
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
}
