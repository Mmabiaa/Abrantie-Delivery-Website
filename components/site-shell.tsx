'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-label">
      <i />
      {children}
    </span>
  )
}

export function ButtonLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link className="button" href={href}>
      {children}
    </Link>
  )
}

function BrandMark() {
  return (
    <Link className="brand" href="/">
      <span className="brand-mark" aria-hidden="true">
        <Image
          src="https://i.pinimg.com/736x/ca/3f/f3/ca3ff3275b612e4c7c6129445a5fff5f.jpg"
          alt=""
          width={34}
          height={34}
          className="brand-mark-img"
          priority
        />
      </span>
      <span>
        <strong>Abrantie&apos;s</strong>
        <small>Delivery Company Ltd.</small>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-inner">
        <BrandMark />

        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header-nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Primary navigation"
        >
          <Link href="/about" onClick={() => setMenuOpen(false)} className='text-center'>
            About
          </Link>
          <Link
            className="header-pill"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Book a delivery <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image
              className="brand-logo"
              src="https://i.pinimg.com/736x/ca/3f/f3/ca3ff3275b612e4c7c6129445a5fff5f.jpg"
              alt="Abrantie's Delivery Company logo"
              width={40}
              height={40}
            />
            <span>
              <strong>Abrantie&apos;s</strong>
              <small>Delivery Company Ltd.</small>
            </span>
          </Link>
          <p className="footer-tagline">
            Accelerating your deliveries
            <br />
            across Ghana.
          </p>
        </div>

        <div className="footer-col">
          <span>Explore</span>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Book a delivery</Link>
        </div>

        <div className="footer-col">
          <span>Get in touch</span>
          <a href="tel:+233241151868">+233 24 115 1868</a>
          <a href="tel:+233508093047">+233 50 809 3047</a>
          <a href="mailto:Abrantiedelivery@gmail.com">
            Abrantiedelivery@gmail.com
          </a>
        </div>

        <div className="footer-col">
          <span>Follow along</span>
          <a href="https://instagram.com/AbrantiesDelivery">
            Instagram ↗
          </a>
          <p>Accra, Ghana</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Abrantie&apos;s Delivery
          Company Ltd.
        </span>
        <span>Fast · Reliable · Secure</span>
      </div>
    </footer>
  )
}