'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Globe } from 'lucide-react'

const mockProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web-app',
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'Smart content generation tool powered by GPT-4',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    technologies: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'ai',
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking experience',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'AWS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile-app',
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-xl hover:shadow-primary/25 transition-shadow"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}