'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, Users, TrendingUp, Zap, MessageSquare, Heart, Globe } from 'lucide-react'
import { useState } from 'react'
import { AnimatedText, AnimatedLetters } from '@/components/animated-text'
import { SectionDivider } from '@/components/section-divider'

const workCategories = [
  { value: 'all', label: 'All Work' },
  { value: 'human-centered', label: 'Human-Centered' },
  { value: 'systems', label: 'Systems Design' },
  { value: 'community', label: 'Community Building' },
  { value: 'strategy', label: 'Strategy' },
]

const caseStudies = [
  {
    id: 'super-debate',
    title: 'Super Debate',
    client: 'Founder & Creator',
    description: 'A platform for in-person intellectual discourse and community growth',
    philosophy: 'Technology should bring us together, not apart. Super Debate creates spaces for people to challenge themselves, be vulnerable, and grow through real human connection.',
    impact: 'Building stronger communities through discourse',
    category: 'human-centered',
    featured: true,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    metrics: [
      { label: 'Active Cities', value: '3', icon: Users },
      { label: 'Events Hosted', value: '20+', icon: MessageSquare },
      { label: 'Community Growth', value: 'Expanding', icon: TrendingUp },
    ],
    values: ['In-Person Connection', 'Intellectual Growth', 'Community Building', 'Challenging Comfort Zones'],
  },
  {
    id: 'thrive-protocol',
    title: 'Thrive Protocol',
    client: 'Ecosystem Specialist',
    description: 'Managing grant allocations and automating evaluation processes with AI',
    philosophy: 'Efficiency in grant distribution means more resources reach builders who need them.',
    impact: 'Streamlining ecosystem funding',
    category: 'systems',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    metrics: [
      { label: 'Grants Managed', value: '$2M+', icon: TrendingUp },
      { label: 'Time Saved', value: '90%', icon: Zap },
      { label: 'Projects Evaluated', value: '100+', icon: Users },
    ],
    values: ['Transparency', 'Efficiency', 'AI-Powered Evaluation', 'Fair Distribution'],
  },
  {
    id: 'sparkblox',
    title: 'Sparkblox',
    client: 'Founder & Product Lead',
    description: 'NFT 2.0 infrastructure with partnerships from Chainlink and Algorand',
    philosophy: 'Digital ownership should be accessible and meaningful, not just speculative.',
    impact: 'Building next-generation NFT infrastructure',
    category: 'web3',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    metrics: [
      { label: 'Capital Raised', value: '$1M+', icon: TrendingUp },
      { label: 'Team Size', value: '18', icon: Users },
      { label: 'Partnerships', value: '2 Major', icon: Globe },
    ],
    values: ['Innovation', 'Web3 Infrastructure', 'Partnership Building', 'Team Leadership'],
  },
  {
    id: 'upland',
    title: 'Upland',
    client: 'Product & Ops Manager',
    description: 'Scaled virtual property game to 200K monthly active users',
    philosophy: 'Gaming economies should reward players, not exploit them.',
    impact: 'Transforming virtual economies',
    category: 'gaming',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    metrics: [
      { label: 'MAU Growth', value: '15x', icon: TrendingUp },
      { label: 'Users', value: '200K', icon: Users },
      { label: 'Token Launch', value: 'SPARK', icon: Zap },
    ],
    values: ['Player-First Economics', 'Sustainable Growth', 'Token Design', 'Community Building'],
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <AnimatedLetters 
              text="Work" 
              className="text-5xl sm:text-6xl font-bold mb-6 block"
              as="h1"
            />
            <AnimatedText className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Every project is guided by a simple principle:
            </AnimatedText>
            <AnimatedText 
              className="block mt-2 text-xl sm:text-2xl font-semibold text-foreground"
              delay={0.3}
            >
              Does this make us more human?
            </AnimatedText>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {workCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 border transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-foreground/20 hover:border-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Case Studies */}
          <div>
            {filteredWork.map((work, index) => (
              <div key={work.id}>
                {index > 0 && (
                  <SectionDivider 
                    variant={index % 3 === 1 ? 'geometric' : index % 3 === 2 ? 'organic' : 'wave'} 
                    className="my-16"
                  />
                )}
                <motion.div
                  id={work.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`${work.featured ? 'lg:col-span-2' : ''}`}
                >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={`relative h-96 overflow-hidden duotone ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                    {work.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider z-10">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      {work.client}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">{work.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{work.description}</p>
                    
                    {/* Philosophy */}
                    <blockquote className="mb-8 pl-6 border-l-2 border-foreground/20 italic text-muted-foreground">
                      {work.philosophy}
                    </blockquote>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {work.metrics.map((metric) => {
                        const Icon = metric.icon
                        return (
                          <div key={metric.label}>
                            <Icon className="w-5 h-5 text-muted-foreground mb-2" />
                            <p className="text-2xl font-bold">{metric.value}</p>
                            <p className="text-xs text-muted-foreground">{metric.label}</p>
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* Values */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {work.values.map((value) => (
                        <span
                          key={value}
                          className="px-3 py-1 text-xs border border-foreground/20"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                    
                    {/* Impact Statement */}
                    <p className="text-lg font-semibold">{work.impact}</p>
                  </div>
                </div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let&apos;s Build Something Human
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I work with organizations that understand technology is a tool, 
              not a replacement for human wisdom.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-4 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 font-medium"
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}