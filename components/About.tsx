'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolio } from '@/lib/constants'

export function About() {
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
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About text */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-lg">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              {portfolio.about}
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">University</h3>
                <p className="text-foreground/80">{portfolio.education.university}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">Program</h3>
                <p className="text-foreground/80">{portfolio.education.program}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">GPA</h3>
                <p className="text-foreground/80">{portfolio.education.gpa}</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass p-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
