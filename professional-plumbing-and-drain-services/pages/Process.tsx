import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND, IMAGES, PROCESS_STEPS } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';

export const Process: React.FC = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Our process</span>
            <h1 className="h1">A clear path from first call to tested repair.</h1>
            <p className="lead">Every job follows a measured workflow so urgent plumbing work still feels organized.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.plumber} alt="Plumber inspecting a sink repair" />
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <ScrollReveal className="process-line">
            {PROCESS_STEPS.map((step, index) => (
              <article className="process-card" data-reveal key={step.title}>
                <span className="process-number">0{index + 1}</span>
                <span className="icon-badge">{step.icon}</span>
                <h2 className="h3">{step.title}</h2>
                <p>{step.description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-media">
            <img src={IMAGES.tools} alt="Plumbing tools organized for a repair process" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">What to expect</span>
            <h2 className="h2">Prepared before arrival, precise before repair.</h2>
            <p className="lead">Dispatch notes help the plumber arrive with the right tools, but the final repair plan is always based on on-site diagnosis.</p>
            <ul className="bullet-list">
              {[
                'Arrival window confirmation',
                'Protective setup before work',
                'Repair options explained in plain language',
                'Testing and cleanup before departure',
              ].map((item) => <li key={item}><CheckCircle2 size={17} color="var(--accent-primary)" /> {item}</li>)}
            </ul>
            <div className="inline-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Start a request <ArrowRight size={18} /></Link>
              <a href={`tel:${BRAND.phone}`} className="btn btn-outline btn-lg">Call {BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

