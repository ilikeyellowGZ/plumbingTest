import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        className="contact-card success-state"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28 }}
      >
        <CheckCircle size={58} color="var(--status-success)" />
        <h3 className="h3">Request received</h3>
        <p className="lead">Our dispatcher will call within 15 minutes to confirm the details.</p>
        <Button onClick={() => setSubmitted(false)} variant="secondary">Send another request</Button>
      </motion.div>
    );
  }

  return (
    <div className="contact-card contact-form">
      <span className="eyebrow">Fast response guaranteed</span>
      <h3 className="h3">Request a free quote</h3>
      <p className="text-muted">Tell us what is happening and we will route the right plumber.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Full name *</label>
            <input id="name" required type="text" placeholder="Thabo Mokoena" autoComplete="name" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone number *</label>
            <input id="phone" required type="tel" placeholder="082 123 4567" autoComplete="tel" />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="service">Service needed</label>
          <select id="service" defaultValue={SERVICES[1].title}>
            {SERVICES.map((service) => (
              <option key={service.id}>{service.title}</option>
            ))}
            <option>Commercial plumbing</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="message">Brief description</label>
          <textarea id="message" rows={5} placeholder="Tell us what is leaking, blocked, or not working..." />
        </div>

        <Button type="submit" fullWidth size="lg" disabled={loading}>
          <Send size={18} />
          {loading ? 'Sending request...' : 'Send request'}
        </Button>
        <p className="text-muted" style={{ fontSize: 12, textAlign: 'center' }}>
          Your details stay private and are only used to respond to this request.
        </p>
      </form>
    </div>
  );
};
