import React from 'react';
import {
  BadgeCheck,
  Camera,
  Droplet,
  Flame,
  Gauge,
  Home,
  ShieldCheck,
  ShowerHead,
  Thermometer,
  Waves,
  Wrench,
} from 'lucide-react';

const img = (name: string) => new URL(`./imgs/${name}`, import.meta.url).href;

export const IMAGES = {
  hero: img('plumber-img.webp'),
  plumber: img('41933720-close-up-of-happy-african-male-plumber-fixing-pipe-of-sink-in-kitchen.jpg'),
  tools: img('0602030005-01-Plumbers.jpg'),
};

export const BRAND = {
  name: 'Professional Plumbing & Drain Services',
  shortName: 'ProPlumb',
  phone: '(800) 555-0199',
  email: 'emergency@proplumb-local.com',
  address: '123 Main Street, Suite 500, Metro City, ST 12345',
  city: 'Metro City',
  yearsInBusiness: '20+',
  responseTime: '60 min',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Process', to: '/process' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
];

export const SERVICES = [
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    kicker: 'Blocked sink, tub, toilet, or sewer line',
    description: 'Mechanical augering and hydro-jetting clear buildup, roots, grease, and stubborn clogs without guesswork.',
    icon: <Droplet />,
    image: IMAGES.plumber,
    bullets: ['Camera-ready diagnosis', 'Hydro-jet options', 'Clean work area'],
  },
  {
    id: 'emergency-repairs',
    title: '24/7 Emergency Repairs',
    kicker: 'Burst pipes, flooding, backups',
    description: 'Rapid dispatch for urgent leaks and water damage risks, with isolation, repair, and cleanup guidance.',
    icon: <Flame />,
    image: IMAGES.hero,
    bullets: ['Live dispatch', 'After-hours service', 'Priority response'],
  },
  {
    id: 'water-heaters',
    title: 'Water Heaters',
    kicker: 'Repair, replacement, maintenance',
    description: 'Tank and tankless water heater service with clear recommendations, warranty-aware parts, and same-day options.',
    icon: <Thermometer />,
    image: IMAGES.tools,
    bullets: ['Tankless support', 'Safety checks', 'Efficiency tuneups'],
  },
  {
    id: 'pipe-inspection',
    title: 'CCTV Pipe Inspection',
    kicker: 'Find the problem before opening walls',
    description: 'Camera inspections locate breaks, bellies, intrusions, and recurring blockages with recorded findings.',
    icon: <Camera />,
    image: IMAGES.plumber,
    bullets: ['Video findings', 'Precise locating', 'Repair planning'],
  },
  {
    id: 'fixture-repair',
    title: 'Fixture Repair',
    kicker: 'Faucets, toilets, showers, and valves',
    description: 'Repair or replace leaking fixtures, failed cartridges, low-pressure hardware, and running toilets.',
    icon: <ShowerHead />,
    image: IMAGES.hero,
    bullets: ['Leak checks', 'Quality fixtures', 'Clean finish'],
  },
  {
    id: 're-piping',
    title: 'Full Re-Piping',
    kicker: 'PEX, copper, and old-line replacement',
    description: 'Modernize aging pipes with staged planning, clean access, pressure testing, and durable materials.',
    icon: <ShieldCheck />,
    image: IMAGES.tools,
    bullets: ['Material options', 'Pressure testing', 'Warranty support'],
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Listen and triage',
    description: 'We confirm the issue, urgency, access details, and whether you need emergency dispatch or a scheduled visit.',
    icon: <Gauge />,
  },
  {
    title: 'Inspect on site',
    description: 'A licensed plumber checks the system, explains the root cause, and documents what needs attention.',
    icon: <Wrench />,
  },
  {
    title: 'Approve upfront pricing',
    description: 'You receive clear options before work begins, including safety notes, warranty coverage, and timing.',
    icon: <BadgeCheck />,
  },
  {
    title: 'Repair and protect',
    description: 'We complete the work, test the system, clean the area, and share prevention tips for next time.',
    icon: <Home />,
  },
];

export const GALLERY_ITEMS = [
  {
    title: 'Kitchen sink repair',
    category: 'Residential',
    image: IMAGES.plumber,
    description: 'Close-quarters fixture repair completed with cabinet-safe access and leak testing.',
  },
  {
    title: 'Emergency truck ready',
    category: 'Dispatch',
    image: IMAGES.hero,
    description: 'Stocked service vehicle prepared for leak isolation, drain clearing, and urgent repairs.',
  },
  {
    title: 'Precision tool setup',
    category: 'Equipment',
    image: IMAGES.tools,
    description: 'Organized equipment staging keeps jobs efficient and protects customer property.',
  },
  {
    title: 'Drain diagnostics',
    category: 'Inspection',
    image: IMAGES.plumber,
    description: 'Hands-on inspection before any invasive work begins.',
  },
  {
    title: 'Valve and pipe work',
    category: 'Repair',
    image: IMAGES.tools,
    description: 'Clean repairs with pressure checks before the job is considered complete.',
  },
  {
    title: 'Fast home response',
    category: 'Emergency',
    image: IMAGES.hero,
    description: 'Arrival-ready support for active leaks, backups, and no-water calls.',
  },
];

export const FAQS = [
  {
    question: 'Do you provide true 24/7 emergency plumbing?',
    answer: `Yes. ${BRAND.shortName} handles urgent leaks, burst pipes, blocked drains, and water heater failures day and night.`,
  },
  {
    question: 'Will I know the price before the work starts?',
    answer: 'Yes. The plumber explains the diagnosis and gives upfront options before beginning approved repairs.',
  },
  {
    question: 'Do you use the images from this project locally?',
    answer: 'Yes. The website uses the local imgs folder for hero, service, gallery, process, and contact visuals.',
  },
  {
    question: 'Can you handle commercial plumbing?',
    answer: 'Yes. We support restaurants, offices, shops, property managers, and light industrial facilities with priority response options.',
  },
  {
    question: 'What should I do while waiting for an emergency plumber?',
    answer: 'Shut off the nearest water valve or main valve if safe, avoid electrical areas with standing water, and call dispatch with photos if possible.',
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: '5 signs your main sewer line is clogged',
    excerpt: 'Early warning signs that a recurring drain issue is becoming a main-line problem.',
    date: 'May 15, 2024',
    author: 'Mike Thompson',
    image: IMAGES.tools,
    category: 'Maintenance',
  },
  {
    id: '2',
    title: 'Tankless vs. traditional water heaters',
    excerpt: 'How to compare installation cost, recovery time, space, and maintenance.',
    date: 'April 22, 2024',
    author: 'Sarah Jenkins',
    image: IMAGES.hero,
    category: 'Upgrades',
  },
  {
    id: '3',
    title: 'Emergency steps during a burst pipe',
    excerpt: 'A practical sequence to limit damage before your plumber arrives.',
    date: 'March 10, 2024',
    author: 'Dave Richards',
    image: IMAGES.plumber,
    category: 'Safety',
  },
];

export const SERVICE_AREAS = [
  'Downtown Metro',
  'Northern Suburbs',
  'West End',
  'South Riverside',
  'Highland Park',
  'East Industrial',
];

