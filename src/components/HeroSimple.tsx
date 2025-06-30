export default function HeroSimple() {
  return (
    <section className="bg-blue-600 text-white py-20 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Amrita Gautam
        </h1>
        <h2 className="text-2xl mb-6">
          Advocate & Assistant Professor
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Dedicated legal professional with expertise in teaching, research, and advocacy.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
            Get In Touch
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold">
            LinkedIn Profile
          </button>
        </div>
      </div>
    </section>
  )
}