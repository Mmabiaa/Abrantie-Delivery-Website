import { ArrowUpRight, Check, MapPin, Route, Users } from 'lucide-react'
import {
    SectionLabel,
    SiteFooter,
    SiteHeader,
    ButtonLink,
} from '@/components/site-shell'

export default function AboutPage() {
    return (
        <main>
            <SiteHeader />

            <section className="page-intro">
                <div>
                    <div className="eyebrow-pill">
                        <span /> The team behind the movement
                    </div>
                    <h1>
                        Local roots.
                        <br />
                        <em>Long reach.</em>
                    </h1>
                </div>
                <p>
                    Abrantie&apos;s exists to make delivery feel less like a
                    question mark and more like a promise kept.
                </p>
            </section>

            <section className="about-feature">
                <div className="about-image">
                    <img
                        src="/courier-hero.png"
                        alt="Abrantie's courier ready to deliver across Accra"
                    />
                    <div className="image-label">
                        <Users size={16} /> People-powered logistics
                    </div>
                </div>

                <div className="about-feature-copy">
                    <SectionLabel>Our point of view</SectionLabel>
                    <h2>
                        Good delivery is
                        <br />
                        <em>good business.</em>
                    </h2>
                    <p>
                        We started with a simple observation: when something
                        arrives on time, everything around it works better.
                    </p>
                    <p>
                        So we pair practical systems with local knowledge —
                        making it easier for people to send, receive and keep
                        moving.
                    </p>
                    <div className="check-list">
                        <span>
                            <Check size={16} /> Clear communication
                        </span>
                        <span>
                            <Check size={16} /> Respect for your time
                        </span>
                        <span>
                            <Check size={16} /> Care at every handoff
                        </span>
                    </div>
                </div>
            </section>

            <section className="about-principles">
                <div>
                    <SectionLabel>How we operate</SectionLabel>
                    <h2>
                        Small details.
                        <br />
                        <em>Big difference.</em>
                    </h2>
                </div>

                <div className="principle-grid">
                    <div>
                        <Route />
                        <b>Route smart</b>
                        <p>
                            We understand the streets, shortcuts and rhythms
                            that make Accra move.
                        </p>
                    </div>
                    <div>
                        <MapPin />
                        <b>Stay close</b>
                        <p>
                            Updates are clear, useful and available when you
                            need them.
                        </p>
                    </div>
                    <div>
                        <Users />
                        <b>Show up</b>
                        <p>
                            Our service is built around real people, not
                            faceless transactions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <SectionLabel>Let&apos;s move forward</SectionLabel>
                <h2>
                    Have a delivery
                    <br />
                    <em>in mind?</em>
                </h2>
                <ButtonLink href="/contact">
                    Talk to our team <ArrowUpRight size={15} />
                </ButtonLink>
            </section>

            <SiteFooter />
        </main>
    )
}