'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function SectionLabel({ children }: { children: React.ReactNode }) { return <span className="section-label"><i />{children}</span> }
export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link className="button" href={href}>{children}</Link> }

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">A</span><span><strong>Abrantie&apos;s</strong><small>Delivery Company Ltd.</small></span></Link><nav className={open ? 'nav-open' : ''}><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/about" onClick={() => setOpen(false)}>About</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact / Book</Link></nav><Link className="header-cta" href="/contact">Book a delivery <ArrowUpRight size={15} /></Link><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>
}

export function SiteFooter() { return <footer className="site-footer"><div className="footer-main"><div><Link className="brand footer-brand" href="/"><span className="brand-mark">A</span><span><strong>Abrantie&apos;s</strong><small>Delivery Company Ltd.</small></span></Link><p className="footer-tagline">Accelerating your deliveries<br />across Ghana.</p></div><div className="footer-col"><span>Explore</span><Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/contact">Book a delivery</Link></div><div className="footer-col"><span>Get in touch</span><a href="tel:+233241151868">+233 24 115 1868</a><a href="tel:+233508093047">+233 50 809 3047</a><a href="mailto:Abrantiedelivery@gmail.com">Abrantiedelivery@gmail.com</a></div><div className="footer-col"><span>Follow along</span><a href="https://instagram.com/AbrantiesDelivery">Instagram ↗</a><p>Accra, Ghana</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Abrantie&apos;s Delivery Company Ltd.</span><span>Fast · Reliable · Secure</span></div></footer> }
