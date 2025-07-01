export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amrita Gautam",
    "jobTitle": ["Advocate", "Assistant Professor"],
    "worksFor": {
      "@type": "Organization",
      "name": "Kathmandu School of Law"
    },
    "url": "https://amritagautam.com.np",
    "image": "https://amritagautam.com.np/amrita.png",
    "sameAs": [
      "https://www.linkedin.com/in/amrita-gautam", // Add your actual LinkedIn URL
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "addressCountry": "Nepal"
    },
    "email": "amritagautam86@gmail.com",
    "telephone": "+977-9849623548",
    "knowsAbout": [
      "Constitutional Law",
      "Human Rights Law",
      "Banking Law",
      "Insurance Law",
      "Legal Education",
      "Clinical Legal Education"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Kathmandu School of Law"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}