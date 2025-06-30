'use client';

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumePage = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    try {
      // Show loading state
      const button = document.querySelector('.download-btn') as HTMLButtonElement;
      if (button) {
        button.innerHTML = '<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Generating PDF...';
        button.disabled = true;
      }

      // Create canvas from the resume content
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: resumeRef.current.scrollWidth,
        height: resumeRef.current.scrollHeight,
      });

      // Create PDF with proper dimensions
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Get PDF dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm for A4
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm for A4
      
      // Get canvas dimensions
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calculate the ratio to fit the canvas to PDF width
      const ratio = pdfWidth / (canvasWidth / 2); // Divide by 2 because of scale: 2
      const scaledHeight = (canvasHeight / 2) * ratio; // Divide by 2 because of scale: 2
      
      // Convert canvas to image
      const imgData = canvas.toDataURL('image/png');
      
      // Check if content fits on one page
      if (scaledHeight <= pdfHeight) {
        // Fits on one page
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, scaledHeight);
      } else {
        // Multiple pages needed
        let yPosition = 0;
        let remainingHeight = scaledHeight;
        
        while (remainingHeight > 0) {
          const pageHeight = Math.min(pdfHeight, remainingHeight);
          
          if (yPosition > 0) {
            pdf.addPage();
          }
          
          pdf.addImage(
            imgData, 
            'PNG', 
            0, 
            -yPosition, // Negative to show different parts of the image
            pdfWidth, 
            scaledHeight
          );
          
          yPosition += pdfHeight;
          remainingHeight -= pdfHeight;
        }
      }
      
      // Download the PDF
      pdf.save('Amrita_Gautam_Resume.pdf');

      // Reset button
      if (button) {
        button.innerHTML = '<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Download PDF';
        button.disabled = false;
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
      
      // Reset button on error
      const button = document.querySelector('.download-btn') as HTMLButtonElement;
      if (button) {
        button.innerHTML = '<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Download PDF';
        button.disabled = false;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      {/* Download Button - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleDownload}
          className="download-btn flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Resume Content - This will be captured for PDF */}
      <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3">Amrita Gautam</h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-4"></div>
            <p className="text-xl text-blue-100 mb-6 font-medium">Advocate & Assistant Professor</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 bg-blue-500/30 rounded-lg p-3">
                <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kathmandu, Bagmati</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-blue-500/30 rounded-lg p-3">
                <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>9849623548</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-blue-500/30 rounded-lg p-3">
                <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">amritagautam86@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-blue-500/30 rounded-lg p-3">
                <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs">LinkedIn Profile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Professional Summary */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed mb-4">
                Advocate and Assistant Professor at Kathmandu School of Law with more than <strong>7 years of professional experience</strong> in legal education, litigation, clinical legal programs, civic awareness campaigns, and research. I hold an <strong>LL.M in Business and International Trade Law (First Division)</strong> and have taught foundational and specialized law subjects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Fluent in <strong>English, Nepali, and Hindi</strong>, I bring strong legal research, documentation, and facilitation skills with a special interest in <strong>Human Rights, Constitutional Law, and Procedural Law</strong>.
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2m0 0h8" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              {/* Assistant Professor */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">Assistant Professor</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">2020 - Present</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-4">Kathmandu School Of Law</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Teaching: <strong>History of Nepal</strong> (B.A.LL.B 1st Year), <strong>Banking and Insurance Law</strong> (B.A.LL.B 4th Year)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Faculty Member, <strong>Clinical Law Department</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Designed and led various <strong>clinical legal education programs</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Bar Council Preparation Course Instructor</strong> (1-Month Intensive Program)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Teaching Assistant */}
              <div className="relative pl-8 pb-8 border-l-2 border-green-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">Teaching Assistant</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">2018 - 2020</span>
                  </div>
                  <p className="text-green-600 font-semibold mb-4">Kathmandu School of Law</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Assisted in: <strong>Professional Ethics, Criminal Moot Court Writing, Clinical Works</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Facilitator in <strong>civic outreach and awareness programs</strong> (2018–2020)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Coordinator */}
              <div className="relative pl-8 pb-8 border-l-2 border-purple-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">Coordinator</h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">2020 - 2023</span>
                  </div>
                  <p className="text-purple-600 font-semibold mb-4">Kathmandu Model Higher Secondary School (KMC, Bagbazar)</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Faculty on subject <strong>Procedural Law, Nepalese Legal System and Research and Presentation</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Organized <strong>Inter college moot court competition</strong> (2022)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Organized <strong>Debate Competition</strong> (2020-2022)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Organized <strong>Field visits</strong> including Detention Center and District Court (2020-2022)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Professional Practice */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">Advocate - Professional & Legal Practice</h3>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">2018 - Present</span>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Engaged in <strong>litigation, client counseling, and procedural legal documentation</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Internship: <strong>Human Rights and Criminal Justice Clinic, KSL</strong> (2016)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Participated in <strong>client meetings, prison visits, legal documentation, and court case filing</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Education</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl border-l-4 border-indigo-500">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Master's Degree In Business And International Trade Law</h3>
                  <p className="text-indigo-600 font-semibold">Kathmandu School Of Law</p>
                  <p className="text-gray-600 text-sm">2074 - 2076</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Bachelor Degree In Law</h3>
                  <p className="text-green-600 font-semibold">Kathmandu School Of Law</p>
                  <p className="text-gray-600 text-sm">2069 - 2074</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border-l-4 border-purple-500">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Higher Secondary School</h3>
                  <p className="text-purple-600 font-semibold">Kathmandu Model College, Bagbazar</p>
                  <p className="text-gray-600 text-sm">2067 - 2069</p>
                </div>
              </div>
            </section>

            {/* Core Competencies */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Core Competencies</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Leadership & Program Management
                  </h4>
                  <p className="text-gray-700 text-sm">Coordination of civic awareness programs, 16-Day Campaign to End Violence Against Women</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Legal Expertise
                  </h4>
                  <p className="text-gray-700 text-sm">Litigation, Human Rights Law, Constitutional Law, Procedural Law, Banking and Insurance Law</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Academic Skills
                  </h4>
                  <p className="text-gray-700 text-sm">Legal Research, Documentation, Curriculum Design, Teaching, Facilitation</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Languages
                  </h4>
                  <p className="text-gray-700 text-sm"><strong>Nepali, English, Hindi</strong> (Fluent)</p>
                </div>
              </div>
            </section>
          </div>

          {/* Publications & Professional Development */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Publications */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Publications</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Chapter Contributor</h4>
                  <p className="text-gray-700 mb-1">Book on Procedural Law by Retd. Judge Binod Prasad Sharma</p>
                  <p className="text-sm text-red-600 font-medium">Lex and Juris Publications, 2023/2080 B.S.</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Co-author</h4>
                  <p className="text-gray-700 mb-1">Constitutional Law book for Higher Secondary Level</p>
                  <p className="text-sm text-red-600 font-medium">Lex and Juris Publications, Bhaktapur</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Contributor</h4>
                  <p className="text-gray-700">Resource Book for Nepal Bar Council (2022)</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Editor</h4>
                  <p className="text-gray-700">Abako Nepal ko Bato – Civic Awareness Booklet, KSL (2022)</p>
                </div>
              </div>
            </section>

            {/* Professional Development */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Professional Development</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-5 rounded-xl border border-teal-200">
                  <h4 className="font-bold text-teal-800 mb-1">International Student Exchange Programme</h4>
                  <p className="text-sm text-gray-600">Law/Logic/Human Rights (2019)</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-1">International Human Rights Documentation</h4>
                  <p className="text-sm text-gray-600">8-Month Coaching & Litigation (2019)</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-1">Human Rights Litigation Training</h4>
                  <p className="text-sm text-gray-600">2-Day Training for Lawyers (2019)</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-1">Justice Access Enhancement</h4>
                  <p className="text-sm text-gray-600">TOT for Earthquake Victims (2016)</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              This resume represents my professional journey and commitment to legal education and practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;