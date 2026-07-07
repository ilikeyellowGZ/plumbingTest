import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND, IMAGES, SERVICE_AREAS } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Dedicated contact page</span>
            <h1 className="h1">Reach a plumber, request a quote, or book a visit.</h1>
            <p className="lead">Emergency dispatch is available all day, every day. Scheduled service requests are usually confirmed the same business day.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.hero} alt="Professional plumbing truck ready for contact dispatch" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Contact information</span>
            <h2 className="h2">Fast support without the runaround.</h2>
            <div className="contact-list">
              <ContactMethod icon={<Phone />} label="Emergency dispatch" value={BRAND.phone} href={`tel:${BRAND.phone}`} />
              <ContactMethod icon={<Mail />} label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <ContactMethod icon={<MapPin />} label="Office" value={BRAND.address} />
              <ContactMethod icon={<Clock />} label="Hours" value="24/7 emergency service" />
            </div>

            <div className="surface-card card-body" style={{ marginTop: 'var(--space-8)' }}>
              <h3 className="h3">Service areas</h3>
              <ul className="bullet-list">
                {SERVICE_AREAS.map((area) => <li key={area}><MapPin size={16} color="var(--accent-primary)" /> {area}</li>)}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="map-panel" aria-label="Service area map">
        <div className="map-card">
          <MapPin size={44} color="var(--accent-primary)" />
          <h2 className="h2">Serving {BRAND.city} and surrounding communities.</h2>
          <p className="lead">Call dispatch to confirm coverage and the closest available plumber.</p>
        </div>
      </section>
    </>
  );
};

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, label, value, href }) => (
  <div className="contact-method">
    <span className="icon-badge">{icon}</span>
    <div>
      <span className="eyebrow">{label}</span>
      {href ? <a className="h3" href={href}>{value}</a> : <p className="h3">{value}</p>}
    </div>
  </div>
);

