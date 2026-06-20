'use client'

import { Mail } from 'lucide-react'
import { portfolio } from '@/lib/constants'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${portfolio.email}`}
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>{portfolio.email}</span>
            </a>
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <span className="text-accent text-lg">💼</span>
              <span>LinkedIn Profile</span>
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <span>📱</span>
              <span>{portfolio.phone}</span>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muhammad Wisnu Haryanto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
