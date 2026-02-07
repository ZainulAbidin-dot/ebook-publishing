import Link from 'next/link';
import data from '../src/data/site-content.json';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header style={{
      padding: '0.75rem 0',
      backgroundColor: 'var(--bg-main)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--text-main)' }}>
          {data.brand.logo.toUpperCase()}
        </Link>
        <nav>
          <ul style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {data.navigation.map((item) => (
              <li key={item.path} className="nav-item">
                <Link href={item.path} style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {item.name}
                  {item.subItems && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {item.subItems && (
                  <ul className="dropdown">
                    {item.subItems.map((sub) => (
                      <li key={sub.path}>
                        <Link href={sub.path} className="dropdown-item">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <ThemeToggle />
          <a href={`tel:${data.brand.contact.phone}`} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
            {data.brand.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
