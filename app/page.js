import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className='mb-36'>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}
