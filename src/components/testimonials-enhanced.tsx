'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Users, Briefcase, Zap } from 'lucide-react'
import { AnimatedText, FadeInText } from '@/components/animated-text'

const testimonials = [
  {
    quote: "John transformed our grant evaluation process from a 3-week manual review to a 2-hour AI-powered system. The impact on our ecosystem has been immeasurable.",
    author: "Sarah Chen",
    role: "Head of Ecosystem",
    company: "Thrive Protocol",
    icon: Zap,
    metrics: "95% time saved",
    featured: true
  },
  {
    quote: "His approach to tokenomics isn&apos;t just theoretical—it&apos;s battle-tested. The SPARK token launch brought in 100K users and created real value for our community.",
    author: "Marcus Rodriguez",
    role: "CEO",
    company: "Upland",
    icon: Users,
    metrics: "15x revenue growth"
  },
  {
    quote: "John sees systems where others see chaos. He helped us build an earn-to-own model that returned $50M+ to our users while growing our business.",
    author: "David Park",
    role: "Product Director",
    company: "Mode Mobile",
    icon: Briefcase,
    metrics: "$50M+ user value"
  },
  {
    quote: "What sets John apart is his philosophy—technology should empower humans, not replace them. This thinking transformed how we approach product development.",
    author: "Lisa Thompson",
    role: "Founder",
    company: "AI Startup",
    icon: Star,
    metrics: "3x productivity"
  },
  {
    quote: "The community governance system he designed gave our 3,000+ providers real ownership. Zero platform fees, maximum trust—revolutionary for a marketplace.",
    author: "Community Leader",
    role: "Top Provider",
    company: "HelpWith.co",
    icon: Users,
    metrics: "$500K+ transactions"
  }
]

export function TestimonialsEnhanced() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            as="h2"
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Client Success Stories
          </AnimatedText>
          <FadeInText delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from founders and leaders who&apos;ve transformed their organizations
            </p>
          </FadeInText>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {testimonials.filter(t => t.featured).map((testimonial) => {
            const Icon = testimonial.icon
            return (
              <div
                key={testimonial.author}
                className="relative p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent rounded-lg"
              >
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-lg font-bold text-primary">{testimonial.metrics}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.filter(t => !t.featured).map((testimonial, index) => {
            const Icon = testimonial.icon
            return (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="font-bold text-primary">{testimonial.metrics}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}