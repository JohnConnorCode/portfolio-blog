'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Github, Globe, Filter } from 'lucide-react'
import { useState } from 'react'

const mockProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management',
    longDescription: 'Built a full-stack e-commerce platform with advanced features including real-time inventory tracking, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web-app',
    featured: true,
    status: 'completed',
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'Smart content generation tool powered by GPT-4',
    longDescription: 'An AI-powered content generation platform that helps users create blog posts, social media content, and marketing copy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    technologies: ['React', 'OpenAI', 'Node.js', 'MongoDB', 'Redis'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'ai',
    featured: true,
    status: 'completed',
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience',
    longDescription: 'Developed a comprehensive mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'AWS', 'Node.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile-app',
    featured: false,
    status: 'completed',
  },
  {
    id: '4',
    title: 'Design System Library',
    description: 'Comprehensive React component library and design system',
    longDescription: 'Created a full-featured design system with over 50 customizable components, dark mode support, and extensive documentation.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'open-source',
    featured: true,
    status: 'completed',
  },
  {
    id: '5',
    title: 'Real-time Analytics Dashboard',
    description: 'Business intelligence dashboard with real-time data visualization',
    longDescription: 'Built a comprehensive analytics platform with real-time data streaming, interactive charts, and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Python', 'PostgreSQL'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web-app',
    featured: false,
    status: 'completed',
  },
  {
    id: '6',
    title: 'Blockchain Voting System',
    description: 'Decentralized voting platform using blockchain technology',
    longDescription: 'Implemented a secure, transparent voting system using blockchain technology for tamper-proof election processes.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'blockchain',
    featured: false,
    status: 'in-progress',
  },
]

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web-app', label: 'Web Apps' },
  { value: 'mobile-app', label: 'Mobile Apps' },
  { value: 'ai', label: 'AI/ML' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'open-source', label: 'Open Source' },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesFeatured = !showFeaturedOnly || project.featured
    return matchesCategory && matchesFeatured
  })

  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my work showcasing various technologies and creative solutions
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-primary text-primary-foreground'
                        : 'glass hover:bg-primary/10'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  showFeaturedOnly
                    ? 'bg-primary text-primary-foreground'
                    : 'glass hover:bg-primary/10'
                }`}
              >
                <Filter className="w-4 h-4" />
                Featured Only
              </button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        Featured
                      </div>
                    )}
                    {project.status === 'in-progress' && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-black text-xs rounded-full">
                        In Progress
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}