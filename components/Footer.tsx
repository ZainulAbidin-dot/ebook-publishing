import Link from 'next/link';
import data from '../src/data/site-content.json';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid grid-3" style={{ marginBottom: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Contact Info</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <li><a href={`tel:${data.brand.contact.phone}`}>{data.brand.contact.phone}</a></li>
                            <li><a href={`mailto:${data.brand.contact.email}`}>{data.brand.contact.email}</a></li>
                            {data.brand.contact.addresses.map((addr, idx) => (
                                <li key={idx}>{addr}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>GhostWriting</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                            <li><Link href="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
                            <li><Link href="/about-us" style={{ color: 'var(--text-muted)' }}>About</Link></li>
                            <li><Link href="/contact-us" style={{ color: 'var(--text-muted)' }}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                            {data.navigation.find(n => n.name === 'Services')?.subItems?.slice(0, 6).map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} style={{ color: 'var(--text-muted)' }}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Support</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                            {data.navigation.find(n => n.name === 'Services')?.subItems?.slice(6).map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} style={{ color: 'var(--text-muted)' }}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    <p>&copy; {new Date().getFullYear()} {data.brand.name}. All Rights Reserved.</p>
                    <ul style={{ display: 'flex', gap: '1.5rem' }}>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-condition">Terms & Conditions</Link></li>
                        <li><Link href="/refund-policy">Refund Policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
