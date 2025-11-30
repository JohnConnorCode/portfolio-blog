'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Send, User, Building2, Briefcase, DollarSign, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { SectionDivider } from '@/components/section-divider'
import { fadeInUp, fadeInUpDelayed, ANIMATION_DURATION, ANIMATION_DELAY } from '@/lib/animation-config'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries and proposals',
    action: 'john@johnconnor.xyz',
    href: 'mailto:john@johnconnor.xyz',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    action: 'View Profile',
    href: 'https://linkedin.com/in/johnconnor',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const validateField = (name: string, value: string) => {
    let error = ''
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required'
        else if (value.length < 2) error = 'Name must be at least 2 characters'
        break
      case 'email':
        if (!value.trim()) error = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format'
        break
      case 'message':
        if (!value.trim()) error = 'Message is required'
        else if (value.length < 10) error = 'Message must be at least 10 characters'
        break
    }
    
    return error
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-mono text-sm tracking-wider mb-4"
            >
              LET&apos;S BUILD SOMETHING REAL
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Start a </span>
              <span style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Whether you need product strategy, technical architecture, or a co-builder who ships—I&apos;m here to help turn vision into reality.
            </motion.p>
          </div>
        </div>
      </section>

      <SectionDivider variant="geometric" />

      {/* Contact Methods & Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="card-brutal">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 text-brutal">
                  GET IN TOUCH
                </h2>
                <p className="text-gray-400 font-mono text-sm mb-8">
                  Whether you&apos;re building a startup, transforming an ecosystem, or creating community-driven systems, let&apos;s talk.
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    variants={fadeInUpDelayed}
                    custom={index + 1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="block card-brutal group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-400/20 border-2 border-cyan-400">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-white mb-2 text-brutal">{method.title}</h3>
                        <p className="text-xs text-gray-500 mb-3 font-mono uppercase tracking-wide">{method.description}</p>
                        <p className="text-sm text-cyan-400 font-bold">{method.action}</p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}

              {/* Social Links */}
              <motion.div
                variants={fadeInUpDelayed}
                custom={3}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                className="card-brutal"
              >
                <p className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-widest">CONNECT ON SOCIAL</p>
                <div className="space-y-4">
                  <motion.a
                    href="https://twitter.com/ablockunchained"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 border-2 border-gray-700 hover:border-cyan-400 bg-black/50 transition-all group"
                  >
                    <Twitter className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-mono text-white group-hover:text-cyan-400 transition-colors">@ablockunchained</span>
                  </motion.a>
                  <motion.a
                    href="https://t.me/blockunchained"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 border-2 border-gray-700 hover:border-cyan-400 bg-black/50 transition-all group"
                  >
                    <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    <span className="text-sm font-mono text-white group-hover:text-cyan-400 transition-colors">@blockunchained</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2"
            >
              <div className="card-brutal">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 text-brutal">
                  START A CONVERSATION
                </h2>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-8">
                  Fill out the form below and I&apos;ll get back to you within 24 hours
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-black text-white mb-3 text-brutal">
                        <User className="w-4 h-4 text-cyan-400" />
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 bg-black border-2 ${errors.name && touched.name ? 'border-red-500' : 'border-white'} text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && touched.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-2 font-mono"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-black text-white mb-3 text-brutal">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 bg-black border-2 ${errors.email && touched.email ? 'border-red-500' : 'border-white'} text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors`}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && touched.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-2 font-mono"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-white mb-3 text-brutal">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border-2 border-white text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-black text-white mb-3 text-brutal">
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                        PROJECT TYPE
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black border-2 border-white text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-black text-gray-500">Select a type</option>
                        <option value="ecosystem" className="bg-black text-white">Ecosystem Development</option>
                        <option value="product" className="bg-black text-white">Product Strategy</option>
                        <option value="community" className="bg-black text-white">Community Building</option>
                        <option value="transformation" className="bg-black text-white">Digital Transformation</option>
                        <option value="consulting" className="bg-black text-white">Strategic Consulting</option>
                        <option value="other" className="bg-black text-white">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-black text-white mb-3 text-brutal">
                        <DollarSign className="w-4 h-4 text-cyan-400" />
                        BUDGET RANGE
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black border-2 border-white text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-black text-gray-500">Select budget</option>
                        <option value="<10k" className="bg-black text-white">Less than $10k</option>
                        <option value="10-25k" className="bg-black text-white">$10k - $25k</option>
                        <option value="25-50k" className="bg-black text-white">$25k - $50k</option>
                        <option value="50-100k" className="bg-black text-white">$50k - $100k</option>
                        <option value=">100k" className="bg-black text-white">More than $100k</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-black text-white mb-3 text-brutal">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project, goals, timeline, and any specific challenges you're facing..."
                      className={`w-full px-4 py-4 bg-black border-2 ${errors.message && touched.message ? 'border-red-500' : 'border-white'} text-white font-mono placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && touched.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-2 font-mono"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="btn-brutal w-full py-4 px-8 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 border-2 border-green-500 bg-green-500/10"
                    >
                      <p className="text-green-400 font-mono text-sm text-center">
                        MESSAGE SENT SUCCESSFULLY! I&apos;LL GET BACK TO YOU WITHIN 24 HOURS.
                      </p>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 border-2 border-red-500 bg-red-500/10"
                    >
                      <p className="text-red-400 font-mono text-sm text-center">
                        SOMETHING WENT WRONG. PLEASE TRY AGAIN OR EMAIL DIRECTLY.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              <span className="text-white">FREQUENTLY</span>
              <span className="text-cyan-400 font-black neon-glow"> ASKED</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              Common questions about working together
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of projects do you take on?",
                answer: "Product strategy, AI integration, Web3 infrastructure, marketplace design, and civic tech platforms. I work with founders who care about building systems that actually work—not growth theater."
              },
              {
                question: "Do you build or just advise?",
                answer: "Both. I'm hands-on—I can architect systems, write code, and ship products alongside your team. Not just decks and frameworks."
              },
              {
                question: "What's your approach?",
                answer: "Surface reality first. I start by understanding what's actually broken, test assumptions against real users, and design systems where incentives align with outcomes."
              },
              {
                question: "How do we get started?",
                answer: "Fill out the form or email directly. I'll respond within 24 hours. If there's fit, we'll scope a focused engagement that delivers real value quickly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUpDelayed}
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="card-brutal group hover:border-cyan-400/50"
              >
                <h3 className="font-black text-white mb-4 text-brutal">{faq.question}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent */}
          <motion.div
            variants={fadeInUpDelayed}
            custom={5}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              Ready to build something <span className="text-cyan-400">extraordinary</span>?
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}