'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Solve Your Product Problems?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s find what&apos;s preventing your users from adopting your product and fix it.
          </p>

          <div className="flex justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 sm:px-10 py-4 sm:py-5 bg-foreground text-background font-bold text-base sm:text-lg flex items-center gap-3 hover:bg-primary transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mt-8">
            Typical response time: Within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}