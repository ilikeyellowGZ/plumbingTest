import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_ITEMS, IMAGES } from '../constants';
import { ScrollReveal } from '../components/ScrollReveal';

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : GALLERY_ITEMS[activeIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((activeIndex + 1) % GALLERY_ITEMS.length);
      if (event.key === 'ArrowLeft') setActiveIndex((activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const move = (direction: 1 | -1) => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + direction + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Gallery</span>
            <h1 className="h1">Real service visuals from the local image folder.</h1>
            <p className="lead">Browse repair, dispatch, tools, and inspection imagery. Open any item for a lightbox view.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.tools} alt="Plumbing tools prepared for work" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal className="gallery-grid">
            {GALLERY_ITEMS.map((item, index) => (
              <button
                className="gallery-card"
                data-reveal
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-caption">
                  <span>{item.category}</span>
                  <strong className="h3">{item.title}</strong>
                </span>
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} gallery image`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="lightbox"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="lightbox-close" type="button" aria-label="Close gallery lightbox" onClick={() => setActiveIndex(null)}>
                <X size={22} />
              </button>
              <button className="lightbox-nav prev" type="button" aria-label="Previous gallery image" onClick={() => move(-1)}>
                <ChevronLeft size={24} />
              </button>
              <button className="lightbox-nav next" type="button" aria-label="Next gallery image" onClick={() => move(1)}>
                <ChevronRight size={24} />
              </button>
              <img src={activeItem.image} alt={activeItem.title} />
              <div className="lightbox-copy">
                <span className="eyebrow">{activeItem.category}</span>
                <h2 className="h2">{activeItem.title}</h2>
                <p className="lead">{activeItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

