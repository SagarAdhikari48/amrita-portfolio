import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Amrita Gautam
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
          Advocate & Assistant Professor
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Dedicated legal professional with expertise in teaching, research, and advocacy. 
          Currently serving as Assistant Professor at Kathmandu School of Law with a passion 
          for human rights and legal education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/amrita-gautam-104067143"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            LinkedIn Profile
          </a>
          <Link 
            href="/resume"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  )
}