
# PROPLUMB Local Services Website

A high-conversion React-based website for local plumbing service businesses. Optimized for mobile lead generation, trust building, and SEO.

## Project Structure
- `App.tsx`: Routing and main structure.
- `components/`: Reusable UI elements (Buttons, Forms, Layout).
- `pages/`: Page-level components for Home, Services, About, News, and Contact.
- `constants.tsx`: Central source of truth for branding, contact info, and content data.
- `index.html`: SEO meta tags and Google Maps/Schema integration.

## Customization Guide
To brand the site for a different city or company:
1. Open `constants.tsx` and update the `BRAND` object.
2. Replace images in the `SERVICES` and `BLOG_POSTS` arrays with relevant local photos.
3. Update the JSON-LD schema in `index.html` to match your local business details.

## Deployment
This project is built for performance and can be deployed to any static host (Vercel, Netlify, GitHub Pages).

## Adding Blog Posts
New articles can be added to the `BLOG_POSTS` array in `constants.tsx`. For a production scale-up, consider connecting this to a headless CMS like Contentful or Sanity.

## Design System
- **Colors**: Red (#DC2626) for CTAs, Slate-900 for authority, White for cleanliness.
- **Typography**: Oswald (Heads) for industrial feel, Inter (Body) for readability.
- **Conversion focus**: Sticky navigation with phone number, multiple CTA zones, and rapid-response lead forms.
