'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, BookOpen, Target, Lightbulb, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Target,
    title: 'Problem-Focused',
    description: 'Identify and solve real product problems, not hypothetical ones.',
  },
  {
    icon: Lightbulb,
    title: 'Behavioral Insight',
    description: 'Apply economics and psychology to understand user behavior.',
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Talk to users extensively to find what they actually need.',
  },
  {
    icon: TrendingUp,
    title: 'Technical Depth',
    description: 'Leverage AI and Web3 technologies with purpose, not hype.',
  },
]

const achievements = [
  { metric: '50+', label: 'Product Problems Solved' },
  { metric: '$50M+', label: 'Funding Enabled' },
  { metric: '200+', label: 'User Research Sessions' },
  { metric: '10+', label: 'Years Technical Product Leadership' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical Product Leader with <span className="text-gradient">Human Insight</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I&apos;m John Connor - a technical product leader who solves real problems through 
              deep user research, behavioral analysis, and expertise in AI and Web3 technologies.
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full aspect-square rounded-xl overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="John Connor"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                  <p className="text-muted-foreground mb-4">
                    With over a decade of experience as a technical product leader, I&apos;ve worked with 
                    everyone from local businesses to startups with $50M+ funding. My background combines 
                    philosophy, economics, and behavioral theory with deep technical expertise in AI and Web3.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    I specialize in finding product-market fit through extensive user research and behavioral 
                    analysis. Rather than building features, I focus on solving real problems that prevent 
                    user adoption and business growth. My approach is human-centered but technically rigorous.
                  </p>
                  <p className="text-muted-foreground">
                    Whether it&apos;s fixing usability issues, conducting user research, or building AI/Web3 
                    products, I bring both technical depth and philosophical insight to every product challenge.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.label} className="text-center">
                      <p className="text-2xl font-bold text-primary">{achievement.metric}</p>
                      <p className="text-xs text-muted-foreground">{achievement.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              My <span className="text-gradient">Philosophy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass rounded-xl p-6 text-center hover:bg-primary/5 transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Technical Product Leadership
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI & Web3 Product Development</li>
                  <li>• Technical Product Strategy</li>
                  <li>• Product Architecture & Scaling</li>
                  <li>• Technology Assessment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Product-Market Fit
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User Research & Interviews</li>
                  <li>• Behavioral Analysis</li>
                  <li>• Product Gap Identification</li>
                  <li>• Market Validation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Problem Solving
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Usability Issue Resolution</li>
                  <li>• Product Strategy Consulting</li>
                  <li>• Cross-functional Leadership</li>
                  <li>• Stakeholder Alignment</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Speaking & Writing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="glass rounded-xl p-6">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Writing & Thought Leadership</h3>
              <p className="text-muted-foreground mb-4">
                I regularly share insights on product strategy, user research, and the intersection 
                of technology with human behavior through my blog and various publications.
              </p>
              <Link href="/blog" className="text-primary font-medium hover:underline">
                Read My Articles →
              </Link>
            </div>
            <div className="glass rounded-xl p-6">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Speaking & Workshops</h3>
              <p className="text-muted-foreground mb-4">
                Available for keynote speaking, workshops, and panel discussions on topics related 
                to product strategy, user research, and AI/Web3 product development.
              </p>
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Book a Speaking Engagement →
              </Link>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Solve Your Product Problems</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need to find product-market fit, fix usability issues, or build 
              AI/Web3 products, I&apos;m here to help.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-xl hover:shadow-primary/25 transition-all"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 glass rounded-lg font-medium hover:bg-primary/10 transition-all"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}