'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

const recentProjects = [
  {
    title: 'Creator Monetization Platform',
    client: 'Tech Startup',
    description: 'Designed and built a comprehensive monetization system for creators',
    results: [
      { icon: DollarSign, metric: '300%', label: 'Revenue Growth' },
      { icon: Users, metric: '10K+', label: 'Active Creators' },
      { icon: TrendingUp, metric: '85%', label: 'Retention Rate' },
    ],
    tags: ['Systems Design', 'Creator Economy', 'Growth'],
  },
  {
    title: 'Operational Excellence Framework',
    client: 'E-commerce Company',
    description: 'Restructured operations across 5 departments to improve efficiency',
    results: [
      { icon: DollarSign, metric: '40%', label: 'Cost Reduction' },
      { icon: TrendingUp, metric: '60%', label: 'Efficiency Gain' },
      { icon: Users, metric: '95%', label: 'Team Satisfaction' },
    ],
    tags: ['Operations', 'Process Optimization', 'Leadership'],
  },
  {
    title: 'Growth System Implementation',
    client: 'SaaS Platform',
    description: 'Built data-driven growth systems for user acquisition and retention',
    results: [
      { icon: Users, metric: '500%', label: 'User Growth' },
      { icon: DollarSign, metric: '65%', label: 'CAC Reduction' },
      { icon: TrendingUp, metric: '120%', label: 'LTV Increase' },
    ],
    tags: ['Growth Strategy', 'Analytics', 'Marketing'],
  },
]

export function RecentWork() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Recent <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Real results from real clients. Here&apos;s how I&apos;ve helped businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:bg-primary/5 transition-all"
            >
              <div className="mb-4">
                <p className="text-sm text-primary font-medium mb-2">{project.client}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-100 text-sm">{project.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border/50">
                {project.results.map((result) => {
                  const Icon = result.icon
                  return (
                    <div key={result.label} className="text-center">
                      <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-lg font-bold">{result.metric}</p>
                      <p className="text-xs text-gray-100">{result.label}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}