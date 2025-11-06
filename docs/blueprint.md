# **App Name**: LensAI Portfolio

## Core Features:

- Portfolio Gallery: Display images fetched dynamically from Firestore Storage.
- Hero Section: Cinematic banner with designer's photo, tagline, and animated text reveal.
- AI Caption Generator: Use Gemini 1.5 Pro API to auto-generate photo descriptions, captions, or blog content.
- Admin Dashboard: Protected with Firebase Auth; allows adding, editing, or deleting portfolio items stored in Firestore.
- Responsive Layout: Elegant and responsive design across mobile, tablet, and desktop devices.
- Light/Dark Mode Toggle: Enable light and dark mode using Tailwind theme classes.
- "Ask the Artist" Chatbot: Gemini-powered chatbot: visitors can ask about the work or techniques. The LLM uses reasoning to decide when or if to incorporate a relevant tool.

## Style Guidelines:

- Primary color: Subtle gold accent (#BFA17A) for a touch of elegance without being overpowering.
- Background color: Very light gray (#F2F2F2), nearly white, providing a neutral backdrop.
- Accent color: Dark charcoal gray (#333333) for text and primary interactive elements, providing strong contrast.
- Headline font: 'Playfair', a modern serif for an elegant, high-end feel. Body font: 'PT Sans', a humanist sans-serif; good for long lines of text.
- Note: currently only Google Fonts are supported.
- Minimal, line-based icons for a clean and modern look.
- Clean and minimal layout with plenty of white space to showcase the visual content.
- Subtle micro-interactions on hover and scroll using Framer Motion.