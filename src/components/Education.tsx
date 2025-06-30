export default function Education() {
  const education = [
    {
      degree: "Master's Degree in Business and International Trade Law",
      institution: "Kathmandu School Of Law",
      period: "2074 - 2076 (B.S.)",
      description: "Completed L.L.M in Business and International Trade Law in first division from the prestigious Kathmandu School of Law."
    },
    {
      degree: "Bachelor Degree in Law",
      institution: "Kathmandu School Of Law",
      period: "2069 - 2074 (B.S.)",
      description: "Completed B.A.LL.B degree with comprehensive legal education and practical training."
    },
    {
      degree: "Higher Secondary School",
      institution: "Kathmandu Model College, Bagbazar",
      period: "2067 - 2069 (B.S.)",
      description: "Completed higher secondary education with focus on humanities and social sciences."
    },
    {
      degree: "School Leaving Certificate",
      institution: "V.S.Niketan",
      period: "2063 - 2066 (B.S.)",
      description: "Completed secondary education with strong academic foundation."
    }
  ]

  const trainings = [
    "8 Month long Coaching on 'International Human Right Documentation and Litigation for Lawyers' organized by Trial International, Human Rights, and Justice Center (January to August 2019)",
    "The Residential International Student Exchange Programme on Law/Logic/International Human Rights organized by FAIRFIELD Institute of Management and Technology (2019)",
    "Three days training of Trainers (TOT) on 'Enhancing Access to Justice of Earthquake Victims through Community Mobile Legal Clinic' by Forum for Nation Building (2016)",
    "Three days training workshop on 'Democratic Challenges Solving by Youth Participation' by Sambhawana (2014)",
    "Participation in 'LITERATURE COMPETITION' during 16 days Campaign to End Violence Against Women"
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Education & Training
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-600">
              Formal Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {edu.degree}
                    </h4>
                    <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <h5 className="text-lg text-blue-600 mb-2">
                    {edu.institution}
                  </h5>
                  <p className="text-gray-700">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Training */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-600">
              Professional Training & Certifications
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-4">
                {trainings.map((training, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">
                      {training}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}