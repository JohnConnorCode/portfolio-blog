'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github, Calendar } from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries and proposals',
    action: 'john@johnconnor.xyz',
    href: 'mailto:john@johnconnor.xyz',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: '30-minute discovery call',
    action: 'Book a time',
    href: '#', // Add Calendly or similar link
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
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
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to build something extraordinary? I&apos;m here to help transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Choose the best way to reach out. I typically respond within 24 hours.
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="block glass rounded-xl p-4 hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm text-primary font-medium">{method.action}</p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Or connect on social</p>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/johnconnor"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/johnconnor"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/johnconnor"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Project Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a type</option>
                        <option value="systems">Systems Architecture</option>
                        <option value="growth">Growth Strategy</option>
                        <option value="operations">Operations Optimization</option>
                        <option value="creator">Creator Platform</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors"
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
                    <label className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-2">What types of projects do you take on?</h3>
                <p className="text-muted-foreground text-sm">
                  I specialize in systems architecture, growth strategy, operations optimization, 
                  and creator economy platforms. I work with startups to enterprise companies.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-2">What&apos;s your typical timeline?</h3>
                <p className="text-muted-foreground text-sm">
                  Project timelines vary based on scope. Most engagements range from 1-6 months, 
                  with the ability to extend for ongoing support.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-2">Do you work remotely?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, I work with clients globally. I&apos;m comfortable with remote collaboration 
                  and can adjust to different time zones as needed.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-2">How do we get started?</h3>
                <p className="text-muted-foreground text-sm">
                  Fill out the inquiry form or book a discovery call. We&apos;ll discuss your needs, 
                  and I&apos;ll provide a proposal within 48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}