import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// import TestStyles from '@/components/TestStyles' // Uncomment to test

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <TestStyles /> */} {/* Uncomment to test Tailwind */}
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
