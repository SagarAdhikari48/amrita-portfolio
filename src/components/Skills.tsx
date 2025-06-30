export default function Skills() {
  const skillCategories = [
    {
      title: "Legal Expertise",
      skills: [
        "Advocacy & Litigation",
        "Legal Research & Writing",
        "Procedural Law",
        "Banking and Insurance Law",
        "Human Rights Law",
        "International Trade Law",
        "Constitutional Law",
        "Criminal Law"
      ]
    },
    {
      title: "Teaching & Training",
      skills: [
        "Legal Education",
        "Curriculum Development",
        "Student Mentoring",
        "Workshop Facilitation",
        "Moot Court Coaching",
        "Research Supervision",
        "Academic Writing",
        "Program Coordination"
      ]
    },
    {
      title: "Languages",
      skills: [
        "English (Fluent)",
        "Nepali (Native)",
        "Hindi (Fluent)"
      ]
    },
    {
      title: "Leadership & Management",
      skills: [
        "Program Leadership",
        "Event Organization",
        "Team Coordination",
        "Project Management",
        "Community Outreach",
        "Public Speaking",
        "Conflict Resolution",
        "Strategic Planning"
      ]
    }
  ]

  const specializations = [
    "Nepalese Legal System",
    "Legal History",
    "Banking and Insurance Law",
    "Human Rights Documentation",
    "International Human Rights",
    "Good Governance",
    "Violence Against Women Issues",
    "Community Legal Education"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Skills & Expertise
        </h2>
        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
              Areas of Specialization
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center"
                >
                  <span className="font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Qualities */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
              Professional Qualities
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Optimistic Leader</h4>
                <p className="text-gray-600">Guided by principles of optimism and positive thinking</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Eager Learner</h4>
                <p className="text-gray-600">Always eager to learn new things and engage in intellectual dialogues</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Dedicated Professional</h4>
                <p className="text-gray-600">Workaholic with excellent communication skills and commitment to excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}