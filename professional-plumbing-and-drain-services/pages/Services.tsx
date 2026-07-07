import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PhoneCall } from 'lucide-react';
import { BRAND, IMAGES, SERVICES } from '../constants';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';

export const Services: React.FC = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Complete service menu</span>
            <h1 className="h1">Plumbing and drain services for every stage of the problem.</h1>
            <p className="lead">Choose emergency help, scheduled repairs, inspections, fixture work, water heaters, or full pipe upgrades.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.hero} alt="Professional plumbing service vehicle" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            {SERVICES.map((service) => (
              <article className="service-detail" data-reveal key={service.id} id={service.id}>
                <div className="detail-media">
                  <img src={service.image} alt={`${service.title} service example`} loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">{service.kicker}</span>
                  <h2 className="h2">{service.title}</h2>
                  <p className="lead">{service.description}</p>
                  <ul className="bullet-list">
                    {service.bullets.concat(['Upfront pricing', 'Licensed technician']).map((bullet) => (
                      <li key={bullet}><CheckCircle size={17} color="var(--accent-primary)" /> {bullet}</li>
                    ))}
                  </ul>
                  <div className="inline-actions">
                    <Button onClick={() => { window.location.href = `tel:${BRAND.phone}`; }}>
                      <PhoneCall size={18} /> Call now
                    </Button>
                    <Link to="/contact" className="btn btn-outline">Get quote</Link>
                  </div>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-section">
          <div>
            <span className="eyebrow">Commercial priority</span>
            <h2 className="h2">Restaurants, offices, retail, property managers, and facilities.</h2>
            <p className="lead">We support planned maintenance and urgent repairs for teams that cannot afford downtime.</p>
          </div>
          <div className="surface-card card-body">
            <h3 className="h3">Priority response options</h3>
            <p className="text-muted">Set up repeat service, post-repair reports, and a dedicated dispatch note for your site.</p>
            <div className="inline-actions">
              <Link to="/contact" className="btn btn-primary">Contact commercial team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

