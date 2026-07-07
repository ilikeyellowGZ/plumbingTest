import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', stagger = 0.08 }) => {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]', scope.current);

    if (reduceMotion || targets.length === 0) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.set(targets, { autoAlpha: 0, y: 24 });

    ScrollTrigger.batch(targets, {
      start: 'top 86%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: 'power3.out',
          stagger,
          overwrite: true,
        });
      },
    });
  }, { scope });

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
};

