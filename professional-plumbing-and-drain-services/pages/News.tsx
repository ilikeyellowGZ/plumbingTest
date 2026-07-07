import React from 'react';
import { Calendar, Tag, User } from 'lucide-react';
import { BLOG_POSTS, BRAND, IMAGES } from '../constants';

export const News: React.FC = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Plumbing news and tips</span>
            <h1 className="h1">Practical guidance for preventing the next urgent call.</h1>
            <p className="lead">Maintenance notes, safety steps, and repair planning advice from the service team.</p>
          </div>
          <div className="page-hero-media">
            <img src={IMAGES.tools} alt="Plumbing tools used for maintenance advice" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="faq-list">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="service-card">
                <div className="card-media">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="card-body">
                  <span className="eyebrow"><Tag size={14} /> {post.category}</span>
                  <h2 className="h2">{post.title}</h2>
                  <p className="lead">{post.excerpt}</p>
                  <p className="text-muted icon-line"><Calendar size={15} /> {post.date} <User size={15} /> {post.author}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="surface-card card-body">
            <span className="eyebrow">Need advice now?</span>
            <h2 className="h2">Talk to dispatch before the problem grows.</h2>
            <p className="lead">We can help you decide whether the issue needs emergency response or a scheduled visit.</p>
            <a href={`tel:${BRAND.phone}`} className="btn btn-primary btn-lg">{BRAND.phone}</a>
          </aside>
        </div>
      </section>
    </>
  );
};

