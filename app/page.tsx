import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Publications } from '@/components/Publications'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="w-full bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Footer />
    </main>
  )
}
