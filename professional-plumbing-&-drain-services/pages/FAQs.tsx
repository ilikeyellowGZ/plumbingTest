import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS, IMAGES } from '../constants';
import { Link } from 'react-router-dom';

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">FAQs</span>
            <h1 className="h1">Answers before you book plumbing service.</h1>
            <p className="lead">Quick answers on emergencies, pricing, local images, service coverage, and what to do before help arrives.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.hero} alt="Professional plumbing service vehicle" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Common questions</span>
            <h2 className="h2">Clarity first, repairs second.</h2>
            <p className="lead">A good plumbing visit starts with knowing what is going to happen next.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Ask a question</Link>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <article className="faq-item" key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="h3">{faq.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.18 }}>
                      <ChevronDown />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${index}`}
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

