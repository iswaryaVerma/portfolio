function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-lavender-100 via-violet-100 to-purple-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-violet-300 to-purple-400 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="text-2xl mr-2">🎓</span> Education
            </h3>
            <div className="space-y-4 text-white">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium">B. Tech – Computer Science and Business Systems</h4>
                <p className="text-violet-100">Sri Krishna College of Engineering and Technology</p>
                <p className="text-lavender-200 font-semibold">2023 – 2027 | TCS Powered Program</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium">Higher Secondary Education</h4>
                <p className="text-violet-100">Hindusthan Matriculation Higher Secondary School</p>
                <p className="text-lavender-200 font-semibold">90%</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-400 to-violet-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img src="/dbbd7aef-43ea-4b79-aebb-c30a72f067ba.jpg" alt="Iswarya Verma" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="text-2xl mr-2">💻</span> Technical Skills
            </h3>
            <div className="space-y-3 text-white">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <span className="font-medium text-lavender-200">Programming:</span> Java, Python, C, C++
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <span className="font-medium text-lavender-200">Frontend:</span> HTML, CSS, JavaScript, Bootstrap, React.js
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <span className="font-medium text-lavender-200">Backend:</span> Spring Boot, REST APIs
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <span className="font-medium text-lavender-200">Database:</span> MySQL
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all">
                <span className="font-medium text-lavender-200">Cloud:</span> Basic AWS
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-400 to-violet-500 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="text-2xl mr-2">💼</span> Internships
            </h3>
            <div className="space-y-4 text-white">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium text-lavender-200">SRM University – Unity (Gaming)</h4>
                <p className="text-purple-100">Worked on Unity development, animations, object control, and interactive scenes.</p>
                <a href="/internship certificates/Image to PDF 20260112 20.37.40.pdf" target="_blank" rel="noopener noreferrer" className="text-lavender-200 hover:text-white underline text-sm">
                  View Certificate 📜
                </a>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-medium text-lavender-200">Accent Techno soft – Construction Management</h4>
                <p className="text-purple-100">Contributed to frontend and backend modules for a construction management system.</p>
                <a href="/internship certificates/Image to PDF 20260112 20.35.48.pdf" target="_blank" rel="noopener noreferrer" className="text-lavender-200 hover:text-white underline text-sm">
                  View Certificate 📜
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="text-2xl mr-2">🏆</span> Certifications & Languages
            </h3>
            <div className="mb-4 text-white">
              <h4 className="font-medium mb-2 text-lavender-200">Certifications:</h4>
              <ul className="text-violet-100 space-y-1">
                <li className="hover:text-white transition-colors">
                  <a href="/training certificates/Image to PDF 20260112 20.34.43.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    • ADDP Course: C, C++, Python, SQL 📜
                  </a>
                </li>
                <li className="hover:text-white transition-colors">
                  <div className="group relative">
                    <span className="cursor-pointer hover:underline">
                      • Infosys Certifications 📜
                    </span>
                    <div className="absolute left-0 top-6 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-max">
                      <a href="/infosys certificates/1-17ecf97b-b197-4387-8e5e-6674293de64e.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 1
                      </a>
                      <a href="/infosys certificates/1-1a4174ae-4689-40b1-baa6-94c6bb8e7b71.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 2
                      </a>
                      <a href="/infosys certificates/1-28a0aef7-7e9b-4e1c-808b-44778a30bf95 (1).pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 3
                      </a>
                      <a href="/infosys certificates/1-32df0523-3914-43ef-b2b4-e7c58b8ace4c.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 4
                      </a>
                      <a href="/infosys certificates/1-56de5ec6-5442-40ba-bfaf-80cc83e38bb4.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 5
                      </a>
                      <a href="/infosys certificates/1-cb82a1ec-f316-4767-9dae-0577d2ef678c.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 6
                      </a>
                      <a href="/infosys certificates/1-da245401-118e-40a0-880a-e35f399c738a.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 7
                      </a>
                      <a href="/infosys certificates/1-e5ef4b3b-5e61-4387-80dd-bacdbc537c03.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-sm">
                        Certificate 8
                      </a>
                    </div>
                  </div>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="/iswarya Verma R introduction to cybersecurity.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    • Cisco: Introduction to Cybersecurity 📜
                  </a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="/nptel certificates/Programming in Java.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    • NPTEL: Programming in Java 📜
                  </a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="/nptel certificates/Soft Skill Development.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    • NPTEL: Soft Skills Development 📜
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className="font-medium mb-2 text-lavender-200">Languages:</h4>
              <p className="text-violet-100 hover:text-white transition-colors">English, Tamil, Hindi (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default About