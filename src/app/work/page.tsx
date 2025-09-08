'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Users, TrendingUp, Zap, Target } from 'lucide-react'
import { useState } from 'react'

const workCategories = [
  { value: 'all', label: 'All Work' },
  { value: 'systems', label: 'Systems Design' },
  { value: 'growth', label: 'Growth Strategy' },
  { value: 'operations', label: 'Operations' },
  { value: 'creator', label: 'Creator Economy' },
]

const caseStudies = [
  {
    id: '1',
    title: 'Creator Monetization Platform',
    client: 'Tech Startup',
    description: 'Designed and implemented a comprehensive monetization system for 10,000+ creators',
    impact: '300% increase in creator revenue',
    category: 'creator',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    metrics: [
      { label: 'Revenue Growth', value: '300%' },
      { label: 'Active Creators', value: '10K+' },
      { label: 'Time to Market', value: '3 months' },
    ],
    technologies: ['System Architecture', 'Payment Processing', 'Analytics', 'API Design'],
  },
  {
    id: '2',
    title: 'Operational Excellence Framework',
    client: 'E-commerce Company',
    description: 'Restructured operations to reduce costs and improve efficiency across 5 departments',
    impact: '40% reduction in operational costs',
    category: 'operations',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Efficiency Gain', value: '60%' },
      { label: 'ROI', value: '250%' },
    ],
    technologies: ['Process Optimization', 'Automation', 'Data Analytics', 'Team Training'],
  },
  {
    id: '3',
    title: 'Growth System Implementation',
    client: 'SaaS Platform',
    description: 'Built a data-driven growth system that scaled user acquisition and retention',
    impact: '500% user growth in 6 months',
    category: 'growth',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    metrics: [
      { label: 'User Growth', value: '500%' },
      { label: 'CAC Reduction', value: '65%' },
      { label: 'LTV Increase', value: '120%' },
    ],
    technologies: ['Growth Strategy', 'A/B Testing', 'Analytics', 'Marketing Automation'],
  },
  {
    id: '4',
    title: 'Creator Tools Suite',
    client: 'Media Company',
    description: 'Developed comprehensive toolset enabling creators to manage, analyze, and scale their content',
    impact: 'Empowered 5,000+ creators',
    category: 'creator',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    metrics: [
      { label: 'Creator Adoption', value: '5K+' },
      { label: 'Engagement Rate', value: '85%' },
      { label: 'Revenue per Creator', value: '+200%' },
    ],
    technologies: ['Product Strategy', 'UX Design', 'API Integration', 'Analytics'],
  },
]

const services = [
  {
    icon: Zap,
    title: 'Systems Architecture',
    description: 'Design scalable systems that grow with your business',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven approaches to accelerate business growth',
  },
  {
    icon: Users,
    title: 'Creator Economy',
    description: 'Build and optimize creator monetization platforms',
  },
  {
    icon: Target,
    title: 'Operations Excellence',
    description: 'Streamline operations for maximum efficiency',
  },
]

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredWork = caseStudies.filter((work) => {
    return selectedCategory === 'all' || work.category === selectedCategory
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Work & <span className="text-gradient">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Helping businesses and creators build systems that scale, optimize operations, and drive measurable growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-6 hover:bg-primary/5 transition-all"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {workCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground'
                    : 'glass hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWork.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-sm text-primary font-medium">{work.client}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground mb-4">{work.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-lg font-semibold text-primary mb-3">{work.impact}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {work.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-bold">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s discuss how I can help transform your business with systems that scale.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              Start a Conversation
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}