'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Send, User, Building2, Briefcase, DollarSign, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { fadeInUp, fadeInUpDelayed } from '@/lib/animation-config'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries and proposals',
    action: 'john@superdebate.org',
    href: 'mailto:john@superdebate.org',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    action: 'View Profile',
    href: 'https://www.linkedin.com/in/johnconnor',
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
    } catch {
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

  const getInputClassName = (fieldName: string) => {
    const hasError = errors[fieldName] && touched[fieldName]
    return `w-full px-4 py-3 bg-card rounded border-2 transition-all outline-none text-foreground font-jost ${
      hasError
        ? 'border-red-500 focus:border-red-500'
        : 'border-foreground/30 focus:border-primary'
    }`
  }

  return (
    <div className="font-jost">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Decorative Greek key pattern */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary" />
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase block mb-6 text-primary"
            >
              Let&apos;s Connect
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-wide font-jost"
            >
              <span className="text-foreground">Get in </span>
              <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg max-w-2xl mx-auto font-light text-foreground/80"
            >
              Whether you need product strategy, technical architecture, or a cross-functional partner who ships—I&apos;m here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Corner accent component */}
              <div className="relative p-8 bg-card rounded-lg border border-border transition-all duration-300">
                {/* Top-left corner accent */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
                {/* Top-right corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary" />
                {/* Bottom-left corner accent */}
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary" />
                {/* Bottom-right corner accent */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />

                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                  How I Work
                </h2>
                <div className="space-y-3 text-sm">
                  <p className="text-foreground/70">
                    <span className="text-primary font-semibold">→</span> Product strategy & architecture
                  </p>
                  <p className="text-foreground/70">
                    <span className="text-primary font-semibold">→</span> Technical leadership & execution
                  </p>
                  <p className="text-foreground/70">
                    <span className="text-primary font-semibold">→</span> Fractional or advisory engagements
                  </p>
                  <div className="pt-3 mt-3 border-t border-border">
                    <p className="text-foreground/50 text-xs">
                      From early-stage startups to growth-phase companies
                    </p>
                  </div>
                </div>
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
                    className="block relative p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30 group"
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2 text-foreground">{method.title}</h3>
                        <p className="text-xs mb-3 uppercase tracking-wide text-foreground/50">
                          {method.description}
                        </p>
                        <p className="text-sm font-semibold text-primary">{method.action}</p>
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
                className="relative p-6 bg-card rounded-lg border border-border"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />

                <p className="text-xs mb-4 uppercase tracking-widest text-foreground/50">
                  Connect On Social
                </p>
                <div className="space-y-3">
                  <motion.a
                    href="https://twitter.com/ablockunchained"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded border border-border bg-foreground/5 transition-all group hover:border-primary/30"
                  >
                    <Twitter className="w-5 h-5 text-primary" />
                    <span className="text-sm transition-colors text-foreground">@ablockunchained</span>
                  </motion.a>
                  <motion.a
                    href="https://t.me/blockunchained"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded border border-border bg-foreground/5 transition-all group hover:border-primary/30"
                  >
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    <span className="text-sm transition-colors text-foreground">@blockunchained</span>
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
              <div className="relative p-8 sm:p-10 bg-card rounded-lg border border-border">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-primary" />

                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                  Tell Me What You&apos;re Building
                </h2>
                <p className="text-xs uppercase tracking-widest mb-8 text-foreground/50">
                  I&apos;ll respond within 24 hours if there&apos;s a potential fit
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                        <User className="w-4 h-4 text-primary" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('name')}
                        placeholder="Enter your full name"
                      />
                      {errors.name && touched.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs mt-2 text-red-500"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('email')}
                        placeholder="your.email@company.com"
                      />
                      {errors.email && touched.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs mt-2 text-red-500"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                      <Building2 className="w-4 h-4 text-primary" />
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card rounded border-2 border-foreground/30 focus:border-primary transition-all outline-none text-foreground font-jost"
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                        <Briefcase className="w-4 h-4 text-primary" />
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card rounded border-2 border-foreground/30 focus:border-primary transition-all outline-none appearance-none text-foreground font-jost"
                      >
                        <option value="">Select a type</option>
                        <option value="pmf">Finding Product-Market Fit</option>
                        <option value="product">Product Strategy & Architecture</option>
                        <option value="fractional">Fractional Product Leadership</option>
                        <option value="advisory">Ongoing Advisory</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card rounded border-2 border-foreground/30 focus:border-primary transition-all outline-none appearance-none text-foreground font-jost"
                      >
                        <option value="">Select budget</option>
                        <option value="<10k">Less than $10k</option>
                        <option value="10-25k">$10k - $25k</option>
                        <option value="25-50k">$25k - $50k</option>
                        <option value="50-100k">$50k - $100k</option>
                        <option value=">100k">More than $100k</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project, goals, timeline, and any specific challenges you are facing..."
                      className={`${getInputClassName('message')} resize-none`}
                    />
                    {errors.message && touched.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs mt-2 text-red-500"
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
                    className="w-full py-4 px-8 text-lg font-semibold rounded flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-jost"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded border-2 border-green-500 bg-green-500/10 text-green-500"
                    >
                      <p className="text-sm text-center font-medium">
                        Message sent successfully! I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded border-2 border-red-500 bg-red-500/10 text-red-500"
                    >
                      <p className="text-sm text-center font-medium">
                        Something went wrong. Please try again or email directly.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm uppercase tracking-widest text-foreground/50">
              Common questions about working together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What types of projects do you take on?",
                answer: "Product strategy, technical architecture, AI integration, Web3 infrastructure, and marketplace design. I work across the full stack—strategy to execution."
              },
              {
                question: "Do you build or just advise?",
                answer: "Both. I can architect systems, write code, and ship alongside your team. 15+ years of hands-on product and engineering work. Not just decks."
              },
              {
                question: "What's your approach?",
                answer: "Start with the real problem. Test assumptions against users. Build systems where incentives align. Measure by outcomes, not vanity metrics."
              },
              {
                question: "What does a typical engagement look like?",
                answer: "Varies by need—fractional product leadership, focused sprints, or ongoing advisory. We'll scope what makes sense for your situation."
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
                className="relative p-6 bg-card rounded-lg border border-border transition-all duration-300 group hover:shadow-lg hover:border-primary/30"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-primary" />

                <h3 className="font-bold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">
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
            <p className="text-sm uppercase tracking-widest text-foreground/50">
              Building what <span className="text-primary font-bold">actually works</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
