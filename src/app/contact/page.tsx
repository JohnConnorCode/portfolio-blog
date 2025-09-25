'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Send, User, Building2, Briefcase, DollarSign, MessageSquare, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { IconDraw } from '@/components/ui/icon-draw'
import { PremiumInput, PremiumTextarea, validators } from '@/components/ui/premium-forms'
import { PremiumButton } from '@/components/ui/premium-button'
import { StaggeredReveal, AnimatedPage } from '@/components/ui/page-transitions'
import { LoadingProgress } from '@/components/ui/loading-progress'
import { useToastNotifications, useCommonToasts } from '@/components/ui/toast-system'
import { PremiumTooltip } from '@/components/ui/premium-tooltips'
import { useSoundEffect } from '@/components/ui/sound-system'
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries and proposals',
    action: 'john@johnconnor.xyz',
    href: 'mailto:john@johnconnor.xyz',
    primary: true,
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    action: 'View Profile',
    href: 'https://linkedin.com/in/johnconnor',
  },
  {
    icon: Phone,
    title: 'Schedule Call',
    description: 'Book a strategy session',
    action: 'Book Meeting',
    href: 'https://calendly.com/johnconnor',
  },
]

const projectTypes = [
  { value: '', label: 'Select project type...' },
  { value: 'product-strategy', label: 'Product Strategy & PMF' },
  { value: 'ai-implementation', label: 'AI Strategy & Implementation' },
  { value: 'web3-ecosystem', label: 'Web3 Ecosystem Design' },
  { value: 'funding-platform', label: 'Grant & Funding Platform' },
  { value: 'behavioral-systems', label: 'Behavioral Economics Systems' },
  { value: 'other', label: 'Other / Multiple Areas' },
]

const budgetRanges = [
  { value: '', label: 'Select budget range...' },
  { value: 'under-25k', label: 'Under $25k' },
  { value: '25k-50k', label: '$25k - $50k' },
  { value: '50k-100k', label: '$50k - $100k' },
  { value: '100k-250k', label: '$100k - $250k' },
  { value: 'over-250k', label: 'Over $250k' },
  { value: 'equity', label: 'Equity Partnership' },
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
  const playSound = useSoundEffect()
  const { success, error: showError } = useToastNotifications()
  const { formSuccess, formError } = useCommonToasts()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    playSound('click')
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 2000))

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        formSuccess()
        playSound('success')
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
        formError()
        playSound('error')
      }
    } catch (error) {
      setSubmitStatus('error')
      formError()
      playSound('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <StaggeredReveal>
            <motion.div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Let's Build Something
                <span className="block text-gradient">Extraordinary</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your product strategy? I'm here to help you build systems that truly serve your users and drive measurable growth.
              </p>
            </motion.div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <StaggeredReveal key={method.title} delay={index * 0.1}>
                <GlassmorphismCard
                  className={`p-6 text-center transition-all duration-300 hover:scale-105 ${
                    method.primary ? 'ring-2 ring-primary/30' : ''
                  }`}
                >
                  <motion.div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconDraw
                        icon={method.icon}
                        size="lg"
                        drawSpeed={1.2}
                        triggerOnHover={true}
                        autoPlay={false}
                        className="w-6 h-6 text-primary"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{method.description}</p>

                  <PremiumButton
                    variant={method.primary ? 'primary' : 'ghost'}
                    size="sm"
                    href={method.href}
                    magneticStrength={0.2}
                    rippleEffect={true}
                    className="w-full"
                  >
                    {method.action}
                  </PremiumButton>
                </GlassmorphismCard>
              </StaggeredReveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <StaggeredReveal delay={0.4}>
              <GlassmorphismCard className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <IconDraw
                      icon={MessageSquare}
                      size="md"
                      drawSpeed={1}
                      autoPlay={true}
                      className="w-6 h-6 mr-3 text-primary"
                    />
                    Start a Conversation
                  </h2>
                  <p className="text-gray-400">
                    Tell me about your project and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PremiumInput
                      label="Full Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange('name')}
                      icon={User}
                      required
                      validator={validators.combine(
                        validators.required(),
                        validators.minLength(2)
                      )}
                      variant="glass"
                    />

                    <PremiumInput
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      icon={Mail}
                      required
                      validator={validators.combine(
                        validators.required(),
                        validators.email()
                      )}
                      variant="glass"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PremiumInput
                      label="Company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange('company')}
                      icon={Building2}
                      variant="glass"
                    />

                    <PremiumTooltip content="This helps me understand your needs better">
                      <div>
                        <PremiumInput
                          label="Project Type"
                          type="text"
                          value={formData.projectType}
                          onChange={handleChange('projectType')}
                          icon={Briefcase}
                          variant="glass"
                        />
                      </div>
                    </PremiumTooltip>
                  </div>

                  <PremiumTooltip content="Budget range helps me recommend the right approach">
                    <div>
                      <PremiumInput
                        label="Budget Range"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange('budget')}
                        icon={DollarSign}
                        variant="glass"
                      />
                    </div>
                  </PremiumTooltip>

                  <PremiumTextarea
                    label="Project Details"
                    value={formData.message}
                    onChange={handleChange('message')}
                    required
                    rows={4}
                    maxLength={1000}
                    showCharCount={true}
                    validator={validators.combine(
                      validators.required(),
                      validators.minLength(10)
                    )}
                    variant="glass"
                  />

                  <div className="pt-4">
                    <PremiumButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      magneticStrength={0.3}
                      rippleEffect={true}
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingProgress
                            isLoading={true}
                            variant="dots"
                            size="sm"
                            className="mr-2"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <IconDraw
                            icon={Send}
                            size="sm"
                            drawSpeed={1}
                            triggerOnHover={true}
                            autoPlay={false}
                            className="w-5 h-5"
                          />
                          <span>Send Message</span>
                        </>
                      )}
                    </PremiumButton>
                  </div>
                </form>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
                  >
                    <IconDraw
                      icon={CheckCircle}
                      size="sm"
                      drawSpeed={1}
                      autoPlay={true}
                      className="w-5 h-5 text-green-500"
                    />
                    <div>
                      <p className="text-sm font-medium text-green-400">Message sent successfully!</p>
                      <p className="text-xs text-green-300">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
              </GlassmorphismCard>
            </StaggeredReveal>

            {/* Info Panel */}
            <StaggeredReveal delay={0.6}>
              <div className="space-y-6">
                <GlassmorphismCard className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <IconDraw
                      icon={Clock}
                      size="sm"
                      drawSpeed={1}
                      autoPlay={true}
                      className="w-5 h-5 mr-3 text-primary"
                    />
                    Response Time
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
                  </p>
                </GlassmorphismCard>

                <GlassmorphismCard className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <IconDraw
                      icon={MapPin}
                      size="sm"
                      drawSpeed={1}
                      autoPlay={true}
                      className="w-5 h-5 mr-3 text-primary"
                    />
                    Location & Timezone
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Based in the United States, I work with clients globally. Flexible with meeting times across different timezones.
                  </p>
                </GlassmorphismCard>

                <GlassmorphismCard className="p-6">
                  <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Initial consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Detailed proposal with timeline and deliverables</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Regular updates and collaborative approach</span>
                    </li>
                  </ul>
                </GlassmorphismCard>
              </div>
            </StaggeredReveal>
          </div>
        </div>
      </section>
    </AnimatedPage>
  )
}