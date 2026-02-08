import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import Logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border)',
            padding: '6rem 0 3rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div className="grid grid-4" style={{ marginBottom: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    <div style={{ gridColumn: 'span 1' }}>
                        <Link href="/" style={{ display: 'inline-block', marginBottom: '2rem' }}>
                            <Image
                                src={Logo}
                                alt={data.brand.name}
                                height={60}
                                width={180}
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '300px' }}>
                            Leading the way in premium book publishing and ghostwriting services with a commitment to excellence.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '2rem', color: 'var(--primary)', fontFamily: 'var(--font-serif)', fontWeight: 800 }}>Contact Info</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            <li>
                                <a href={`tel:${data.brand.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: 'var(--accent)' }}>📞</span> {data.brand.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${data.brand.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: 'var(--accent)' }}>✉️</span> {data.brand.contact.email}
                                </a>
                            </li>
                            {data.brand.contact.addresses.map((addr, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <span style={{ color: 'var(--accent)' }}>📍</span> {addr}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '2rem', color: 'var(--primary)', fontFamily: 'var(--font-serif)', fontWeight: 800 }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                            <li><Link href="/" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Home</Link></li>
                            <li><Link href="/about-us" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>About Us</Link></li>
                            <li><Link href="/contact-us" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '2rem', color: 'var(--primary)', fontFamily: 'var(--font-serif)', fontWeight: 800 }}>Our Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                            {data.navigation.find(n => n.name === 'Services')?.subItems?.slice(0, 5).map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '2.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} {data.brand.name}. All Rights Reserved.</p>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-condition">Terms & Conditions</Link></li>
                        <li><Link href="/refund-policy">Refund Policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
