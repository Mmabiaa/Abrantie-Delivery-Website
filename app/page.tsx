'use client'

import Link from 'next/link'
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronRight,
    MapPin,
    Package,
    ScanLine,
    ShieldCheck,
    Timer,
    Truck,
} from 'lucide-react'
import {
    SectionLabel,
    SiteFooter,
    SiteHeader,
    ButtonLink,
} from '@/components/site-shell'

const services = [
    ['01', 'On-demand delivery', 'Same-day movement for the moments that matter.'],
    ['02', 'Business logistics', 'Reliable last-mile support for growing teams.'],
    ['03', 'Food & retail', 'Careful handling from kitchen or shop to door.'],
]

export default function Home() {
    return (
        <main>
            <SiteHeader />

            <section className="command-hero">
                <div className="hero-command-copy">
                    <div className="eyebrow-pill">
                        <span /> Accra / Ghana / Live operations
                    </div>
                    <h1>
                        Move it
                        <br />
                        <span>forward.</span>
                    </h1>
                    <p>
                        Delivery that keeps pace with the people, businesses and
                        ambition of Ghana.
                    </p>
                    <div className="hero-actions">
                        <ButtonLink href="/contact">
                            Start a delivery <ArrowUpRight size={15} />
                        </ButtonLink>
                        <Link className="ghost-link" href="/contact#tracking">
                            Track a parcel <ArrowRight size={15} />
                        </Link>
                    </div>
                    <div className="hero-metrics">
                        <div>
                            <strong>01</strong>
                            <span>Simple booking</span>
                        </div>
                        <div>
                            <strong>24/7</strong>
                            <span>Live visibility</span>
                        </div>
                        <div>
                            <strong>GHS</strong>
                            <span>Fair pricing</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <img
                        src="/courier-hero.png"
                        alt="Abrantie's courier delivering a parcel in Accra"
                    />
                    <div className="visual-overlay" />
                    <div className="delivery-card">
                        <div className="delivery-card-top">
                            <span>
                                <i /> In transit
                            </span>
                            <strong>ABR-20481</strong>
                        </div>
                        <div className="delivery-destination">
                            <MapPin size={18} />
                            <div>
                                <small>Next stop</small>
                                <b>Osu, Accra</b>
                            </div>
                            <ChevronRight size={16} />
                        </div>
                        <div className="mini-progress">
                            <span />
                        </div>
                        <small className="eta">
                            Arriving today <b>• 14:35</b>
                        </small>
                    </div>
                    <div className="route-badge">
                        <Truck size={17} />
                        <span>
                            Accra
                            <br />
                            <b>→ everywhere</b>
                        </span>
                    </div>
                </div>
            </section>

            <section className="track-band" id="tracking">
                <div className="track-heading">
                    <ScanLine size={20} />
                    <div>
                        <SectionLabel>Parcel control</SectionLabel>
                        <h2>Know the next move.</h2>
                    </div>
                </div>
                <form className="track-form">
                    <input
                        aria-label="Tracking number"
                        placeholder="Enter tracking number"
                    />
                    <button>
                        Track parcel <ArrowRight size={15} />
                    </button>
                </form>
            </section>

            <section className="section-block services-section">
                <div className="section-heading">
                    <div>
                        <SectionLabel>What we move</SectionLabel>
                        <h2>
                            Built for the
                            <br />
                            <em>everyday rush.</em>
                        </h2>
                    </div>
                    <p>
                        One dependable team for the things that cannot wait —
                        from a single envelope to a full delivery operation.
                    </p>
                </div>
                <div className="service-grid">
                    {services.map(([num, title, copy]) => (
                        <Link href="/contact" className="service-card" key={num}>
                            <span className="service-num">{num}</span>
                            <Package size={23} />
                            <h3>{title}</h3>
                            <p>{copy}</p>
                            <ArrowUpRight className="service-arrow" size={18} />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="proof-section">
                <div className="proof-inner">
                    <div>
                        <SectionLabel>Why teams choose us</SectionLabel>
                        <h2>
                            Less chasing.
                            <br />
                            <em>More getting done.</em>
                        </h2>
                    </div>
                    <div className="proof-list">
                        <div>
                            <Timer />
                            <span>
                                <b>On the clock</b>Clear ETAs and proactive
                                updates.
                            </span>
                        </div>
                        <div>
                            <ShieldCheck />
                            <span>
                                <b>Handled with care</b>Every parcel matters,
                                every handoff.
                            </span>
                        </div>
                        <div>
                            <MapPin />
                            <span>
                                <b>Knows the route</b>Local knowledge with a
                                wider view.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-block final-cta">
                <div className="cta-panel">
                    <div>
                        <SectionLabel>Ready when you are</SectionLabel>
                        <h2>
                            Put something
                            <br />
                            <em>in motion.</em>
                        </h2>
                    </div>
                    <ButtonLink href="/contact">
                        Book a delivery <ArrowUpRight size={15} />
                    </ButtonLink>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}