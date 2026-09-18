'use client'

import { FormEvent, useState } from 'react'
import {
    ArrowRight,
    Check,
    Clock3,
    Mail,
    MapPin,
    Phone,
    ScanLine,
} from 'lucide-react'
import { SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell'

export default function ContactPage() {
    const [sent, setSent] = useState(false)

    function submit(e: FormEvent) {
        e.preventDefault()
        setSent(true)
    }

    return (
        <main>
            <SiteHeader />

            <section className="page-intro contact-intro">
                <div>
                    <div className="eyebrow-pill">
                        <span /> Start your delivery
                    </div>
                    <h1>
                        Tell us where
                        <br />
                        <em>it needs to go.</em>
                    </h1>
                </div>
                <p>
                    Share a few details and our team will confirm the route,
                    timing and price with you.
                </p>
            </section>

            <section className="booking-layout">
                <aside className="contact-sidebar">
                    <div className="sidebar-status">
                        <span /> Dispatch team online
                    </div>
                    <h2>
                        One message
                        <br />
                        <em>gets it moving.</em>
                    </h2>

                    <div className="contact-detail">
                        <Phone size={17} />
                        <span>
                            <small>Call</small>
                            +233 24 115 1868
                            <br />
                            +233 50 809 3047
                        </span>
                    </div>

                    <div className="contact-detail">
                        <Mail size={17} />
                        <span>
                            <small>Email</small>
                            Abrantiedelivery@gmail.com
                        </span>
                    </div>

                    <div className="contact-detail">
                        <MapPin size={17} />
                        <span>
                            <small>Coverage</small>
                            Accra &amp; surrounding areas
                        </span>
                    </div>

                    <div className="sidebar-note">
                        <Clock3 size={17} />
                        <span>
                            We respond quickly during operating hours.
                        </span>
                    </div>
                </aside>

                <div className="booking-card">
                    <div className="booking-card-head">
                        <div>
                            <SectionLabel>Delivery request</SectionLabel>
                            <h2>Let&apos;s plan the route.</h2>
                        </div>
                        <span className="step-count">01 / 01</span>
                    </div>

                    {sent ? (
                        <div className="success-message">
                            <span>
                                <Check />
                            </span>
                            <h3>Request received.</h3>
                            <p>
                                Our dispatch team will contact you shortly to
                                confirm the details.
                            </p>
                            <button
                                className="ghost-link"
                                onClick={() => setSent(false)}
                            >
                                Send another request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submit}>
                            <div className="form-row">
                                <label>
                                    Pickup point
                                    <input
                                        required
                                        placeholder="Where should we collect from?"
                                    />
                                </label>
                                <label>
                                    Drop-off point
                                    <input
                                        required
                                        placeholder="Where should we deliver to?"
                                    />
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    What are you sending?
                                    <select defaultValue="" required>
                                        <option value="" disabled>
                                            Select package type
                                        </option>
                                        <option>Document</option>
                                        <option>Food or groceries</option>
                                        <option>Parcel</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                                <label>
                                    Preferred timing
                                    <select defaultValue="" required>
                                        <option value="" disabled>
                                            When should we collect?
                                        </option>
                                        <option>As soon as possible</option>
                                        <option>Today</option>
                                        <option>Tomorrow</option>
                                    </select>
                                </label>
                            </div>

                            <label>
                                Anything else we should know?
                                <textarea
                                    rows={3}
                                    placeholder="Size, special instructions, or a little context..."
                                />
                            </label>

                            <button className="submit-button">
                                Request a quote <ArrowRight size={16} />
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <section className="contact-tracking">
                <ScanLine size={22} />
                <div>
                    <SectionLabel>Already sent something?</SectionLabel>
                    <h2>Track your parcel</h2>
                </div>
                <p>Use your tracking number to see the latest update.</p>
                <div className="contact-track-input">
                    <input placeholder="ABR-20481" />
                    <button>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </section>

            <SiteFooter />
        </main>
    )
}