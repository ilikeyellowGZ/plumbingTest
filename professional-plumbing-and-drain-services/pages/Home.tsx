import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, PhoneCall, Shield, Star } from 'lucide-react';
import { BRAND, IMAGES, PROCESS_STEPS, SERVICES } from '../constants';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { ScrollReveal } from '../components/ScrollReveal';

export const Home: React.FC = () => {
  return (
    <>
      <section className="hero" style={{ '--hero-image': `url(${IMAGES.plumber})` } as React.CSSProperties}>
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="eyebrow"><Clock size={15} /> Available 24/7 for emergencies</span>
            <h1 className="display">Professional plumbing when every minute matters.</h1>
            <p className="lead">
              Licensed plumbers for emergency leaks, drain clearing, water heaters, inspections, and scheduled repairs across {BRAND.city}.
            </p>
            <div className="hero-actions">
              <Button size="lg" onClick={() => { window.location.href = `tel:${BRAND.phone}`; }}>
                <PhoneCall size={20} /> Call {BRAND.phone}
              </Button>
              <Link to="/contact" className="btn btn-ghost btn-lg">Request service</Link>
            </div>
            <div className="trust-row">
              <div className="trust-item"><Award color="var(--accent-primary)" /> {BRAND.yearsInBusiness} years experience</div>
              <div className="trust-item"><Shield color="var(--accent-primary)" /> Licensed and insured</div>
              <div className="trust-item"><Star color="var(--accent-primary)" /> 4.9 local rating</div>
            </div>
          </motion.div>

          <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }}>
            <img src={IMAGES.hero} alt="Professional plumbing service vehicle ready for dispatch" fetchPriority="high" />
            <div className="card-body">
              <span className="eyebrow">Emergency dispatch</span>
              <h2 className="h3">{BRAND.responseTime} average emergency response window</h2>
              <p className="text-muted">A stocked truck, a trained plumber, and a clear price before work starts.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stat-strip">
          {[
            ['15k+', 'Jobs completed'],
            ['24/7', 'Live response'],
            ['100%', 'Upfront pricing'],
            ['20+', 'Years in service'],
          ].map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Expert solutions</span>
              <h2 className="h2">Services built for homes, shops, and urgent calls.</h2>
            </div>
            <p className="lead">From blocked drains to full re-piping, every visit starts with diagnosis, options, and tidy work.</p>
          </div>

          <ScrollReveal className="grid-3">
            {SERVICES.slice(0, 6).map((service) => (
              <article className="service-card" data-reveal key={service.id}>
                <div className="card-media">
                  <img src={service.image} alt={`${service.title} plumbing service`} loading="lazy" />
                  <span className="icon-badge">{service.icon}</span>
                </div>
                <div className="card-body">
                  <span className="eyebrow">{service.kicker}</span>
                  <h3 className="h3">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>
                  <ul className="bullet-list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}><CheckCircle2 size={16} color="var(--accent-utility)" /> {bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </ScrollReveal>

          <div className="inline-actions" style={{ justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-secondary btn-lg">View all services</Link>
            <Link to="/gallery" className="btn btn-outline btn-lg">See project gallery</Link>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-section">
          <div>
            <span className="eyebrow">How we work</span>
            <h2 className="h2">A calm process for stressful plumbing problems.</h2>
            <p className="lead">You get clear triage, a licensed inspection, upfront pricing, and documented repair work.</p>
            <div className="inline-actions">
              <Link to="/process" className="btn btn-primary btn-lg">View process</Link>
              <a href={`tel:${BRAND.phone}`} className="btn btn-ghost btn-lg">Call dispatch</a>
            </div>
          </div>
          <ScrollReveal className="process-line">
            {PROCESS_STEPS.map((step, index) => (
              <article className="process-card" data-reveal key={step.title}>
                <span className="process-number">0{index + 1}</span>
                <span className="icon-badge">{step.icon}</span>
                <h3 className="h3">{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-media">
            <img src={IMAGES.tools} alt="Plumbing tools prepared for professional service" loading="lazy" />
            <div className="floating-badge">
              <strong className="h3">No surprise charges</strong>
              <p>Approve the price before the repair begins.</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why property owners trust us</span>
            <h2 className="h2">Technical repair work with homeowner-level care.</h2>
            <p className="lead">Our crews protect floors, explain findings plainly, and test the system before leaving.</p>
            <div className="grid-2">
              {['Licensed plumbers', 'Clean work areas', 'Warranty support', 'Commercial ready'].map((item) => (
                <div className="surface-card card-body" key={item}>
                  <CheckCircle2 color="var(--accent-primary)" />
                  <h3 className="h3">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Start here</span>
            <h2 className="h2">Tell us what is happening.</h2>
            <p className="lead">Emergency or scheduled, the form routes your request to the right service path.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

