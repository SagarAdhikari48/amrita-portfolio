export default function Experience() {
  const experiences = [
    {
      title: "Assistant Professor",
      company: "Kathmandu School Of Law",
      period: "2020 - Present",
      description: "Faculty on Nepalese Legal History for B.A.LL.B 1st Year and Banking and Insurance law for B.A.LL.B 4th Year. Member of Clinical Law Department.",
      achievements: [
        "Organized Inter College +2 Debate Competitions in 2022",
        "Organized monthly Nepal Bar Council exam Preparation classes",
        "Worked as editor of 'Abako Nepal ko Bato' booklet for Civic Awareness Program 2022",
        "Served as judge in Lawyer-Client Competition 2021 and 2022",
        "Chapter contributor on 'कार्यविधि कानुनको परिचय' book for Nepal Bar Council Exam 2022"
      ]
    },
    {
      title: "Advocate",
      company: "Nepal Bar Council",
      period: "2018 - Present",
      description: "Practicing advocate with expertise in litigation and legal consultation.",
      achievements: [
        "Active litigation on various cases",
        "Legal consultation and client counseling",
        "Specialization in procedural law and human rights"
      ]
    },
    {
      title: "Coordinator",
      company: "Kathmandu Model Higher Secondary School (KMC, Bagbazar)",
      period: "2020 - 2023",
      description: "Faculty on Procedural Law, Nepalese Legal System and Research and Presentation at Higher Secondary level.",
      achievements: [
        "Organized Inter college moot court competition in 2022",
        "Organized Debate Competition from 2020 to 2022",
        "Organized Research based Presentation Program from 2020 to 2022",
        "Organized Field visits including Detention Center and District Court"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Kathmandu School of Law",
      period: "2018 - 2020",
      description: "Worked as mentor and facilitator in different outreach programs and as teaching assistant for various subjects.",
      achievements: [
        "Teaching Assistant in 'Professional Ethics' for B.A.LL.B 3rd Year",
        "Teaching Assistant in 'Drafting document of Criminal Moot Court' for B.A.LL.B 4th Year",
        "Organizer of Civic Awareness programs in 2018 and 2020",
        "Program officer in Joint National Residential Program and International Residential Schools"
      ]
    },
    {
      title: "Research Assistant",
      company: "Kathmandu School of Law",
      period: "Feb 2017 - Dec 2017",
      description: "Worked as researcher in 'Enhancing Good Governance and Human Rights Project'.",
      achievements: [
        "Conducted research on governance and human rights issues",
        "Mentored students in various outreach programs",
        "Facilitated community-based programs"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-gray-700 mb-2">
                    {exp.company}
                  </h4>
                </div>
                <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}