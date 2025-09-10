# Portfolio & Blog

[![Deploy Status](https://img.shields.io/github/deployments/JohnConnorCode/portfolio-blog/production?label=vercel&logo=vercel)](https://github.com/JohnConnorCode/portfolio-blog/deployments)
[![Build Status](https://github.com/JohnConnorCode/portfolio-blog/actions/workflows/vercel-monitor.yml/badge.svg)](https://github.com/JohnConnorCode/portfolio-blog/actions)

A beautiful, dynamic, and customizable portfolio and blog built with Next.js, Sanity CMS, and Supabase.

## Features

- **Beautiful Animations**: Smooth, eye-catching animations using Framer Motion
- **Dark/Light Theme**: Built-in theme switching with next-themes
- **Blog System**: Full-featured blog with categories, tags, and search
- **Project Showcase**: Display your projects with live demos and source links
- **CMS Integration**: Sanity CMS for easy content management
- **Database**: Supabase for backend functionality
- **Responsive Design**: Looks great on all devices
- **SEO Optimized**: Built with SEO best practices
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity
- **Database**: Supabase
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-blog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Sanity:

```bash
npm install -g @sanity/cli
sanity init
```

Follow the prompts to create your Sanity project and update the environment variables.

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

```
portfolio-blog/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable components
│   ├── lib/             # Utility functions and configurations
│   └── types/           # TypeScript type definitions
├── sanity/
│   └── schemas/         # Sanity schema definitions
├── public/              # Static files
└── ...config files
```

## Customization

### Updating Personal Information

1. Edit `src/app/layout.tsx` for site metadata
2. Update social links in `src/components/footer.tsx`
3. Modify the About page at `src/app/about/page.tsx`

### Adding Content

1. **Blog Posts**: Use Sanity Studio to create and manage blog posts
2. **Projects**: Add projects through Sanity CMS
3. **Categories**: Manage blog categories in Sanity

### Styling

- Colors and theme: Edit `src/app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component styles: Individual component files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features to Extend

- Add a contact form with email integration
- Implement blog comments using Supabase
- Add analytics tracking
- Create an admin dashboard
- Add RSS feed for blog
- Implement newsletter subscription
- Add more animation effects
- Create custom page transitions

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
