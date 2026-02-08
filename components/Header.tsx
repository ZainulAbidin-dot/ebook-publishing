"use client";
import Link from 'next/link';
import Image from 'next/image';
import data from '../src/data/site-content.json';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/logo.png';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header style={{
        backgroundColor: 'var(--bg-main)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid var(--border)',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={Logo}
              alt={data.brand.name}
              height={50}
              width={160}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <ul style={{ display: 'flex', gap: '2.25rem', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0, flexDirection: 'inherit' }}>
              {data.navigation.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    {item.name}
                    {item.subItems && (
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-desktop">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                  {item.subItems && (
                    <ul className="dropdown">
                      {item.subItems.map((sub) => (
                        <li key={sub.path}>
                          <Link href={sub.path} className="dropdown-item" onClick={() => setIsOpen(false)}>
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

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeToggle />
            <a href={`tel:${data.brand.contact.phone}`} className="nav-desktop btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              {data.brand.contact.phone}
            </a>

            <button
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </div>
        </div>
      </header>
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
    </>
  );
}
