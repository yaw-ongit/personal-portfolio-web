'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolio } from '@/lib/constants'
import { ExternalLink } from 'lucide-react'

export function Publications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="publications"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-4">
            Research & Publications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Publications
          </h2>
          <p className="text-muted-foreground mt-4">
            Sharing knowledge through research and academic contributions
          </p>
        </motion.div>

        <div className="space-y-6">
          {portfolio.publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              className="glass p-8 rounded-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {publication.date}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {publication.conference}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {publication.title}
                  </h3>

                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {publication.description}
                  </p>

                  <a
                    href={publication.link}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group/link"
                  >
                    Read Publication
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="hidden md:block text-accent/20 text-4xl font-bold">
                  📚
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
