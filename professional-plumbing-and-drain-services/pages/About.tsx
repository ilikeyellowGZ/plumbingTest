import React from 'react';
import { Award, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { BRAND, IMAGES } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const values = [
    { title: 'Integrity', icon: <Award />, desc: 'Clear diagnosis, fair options, and no pressure tactics.' },
    { title: 'Craftsmanship', icon: <ShieldCheck />, desc: 'Repairs are tested, documented, and built to last.' },
    { title: 'Respect', icon: <Users />, desc: 'Crews protect your property and leave the work area tidy.' },
    { title: 'Community', icon: <HeartHandshake />, desc: `Local service for ${BRAND.city} homes and businesses.` },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Family owned and operated</span>
            <h1 className="h1">A plumbing team built around trust, speed, and clean work.</h1>
            <p className="lead">For {BRAND.yearsInBusiness} years, {BRAND.shortName} has helped property owners solve stressful water problems with calm, skilled service.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.plumber} alt="Plumber repairing a sink cabinet pipe" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="h2">From one service truck to a trusted local plumbing team.</h2>
            <p className="lead">
              We started with a simple belief: customers should understand the repair before they approve the work. That still guides every visit.
            </p>
            <p className="lead">
              Today our plumbers bring modern tools, stocked vehicles, and careful communication to emergency calls, remodel support, and preventive maintenance.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Book service</Link>
          </div>
          <div className="split-media">
            <img src={IMAGES.tools} alt="Organized plumbing tools and repair materials" loading="lazy" />
            <div className="floating-badge">
              <strong className="h3">15k+ jobs</strong>
              <p>Completed across homes, shops, and local facilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Values</span>
              <h2 className="h2">The standards behind the service.</h2>
            </div>
            <p className="lead">Our process is simple because emergencies already create enough noise.</p>
          </div>
          <ScrollReveal className="grid-4 grid-3">
            {values.map((value) => (
              <article className="surface-card card-body" data-reveal key={value.title}>
                <span className="icon-badge">{value.icon}</span>
                <h3 className="h3">{value.title}</h3>
                <p className="text-muted">{value.desc}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

