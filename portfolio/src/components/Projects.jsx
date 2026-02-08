import { useState } from 'react'

function Projects() {
  const [showDemo, setShowDemo] = useState(false)

  const projects = [
    {
      title: "Construction Management System",
      tech: "HTML, CSS, JS, Bootstrap, SQL",
      description: "Built a comprehensive system for managing construction tasks, materials, and project progress with intuitive user interface.",
      status: "Completed",
      gradient: "from-violet-400 to-purple-500"
    },
    {
      title: "Career Milestone Tracker",
      tech: "React.js, Spring Boot",
      description: "Full-stack application to track professional skills, achievements, and career updates with real-time data management.",
      status: "Completed",
      gradient: "from-indigo-400 to-violet-500"
    },
    {
      title: "Oil Spill Detection",
      tech: "Unity",
      description: "Interactive Unity-based simulation for detecting and visualizing oil spills with realistic environmental modeling.",
      status: "Completed",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      title: "Intelligent Resume Scanner",
      tech: "AI, Python, NLP",
      description: "AI-powered tool to extract skills and qualifications from resumes, streamlining the recruitment screening process.",
      status: "Completed",
      gradient: "from-violet-500 to-purple-600"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lavender-300 to-violet-300">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-gradient-to-br ${project.gradient} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-white/20`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                  project.status === 'Ongoing' 
                    ? 'bg-lavender-200 text-purple-900' 
                    : 'bg-violet-200 text-violet-900'
                } shadow-lg`}>
                  {project.status} {project.status === 'Ongoing' ? '⚡' : '✓'}
                </span>
              </div>
              <p className="text-white mb-6 leading-relaxed opacity-90">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full hover:bg-opacity-30 transition-all backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="h-1 bg-white bg-opacity-30 rounded-full overflow-hidden flex-1 mr-4">
                  <div className={`h-full bg-lavender-200 rounded-full ${
                    project.status === 'Ongoing' ? 'w-3/4' : 'w-full'
                  }`}></div>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={
                      project.title === "Construction Management System" ? "/Construction_management/demo.html" :
                      project.title === "Career Milestone Tracker" ? "/milestone/demo.html" :
                      project.title === "Oil Spill Detection" ? "/oilspill/demo.html" :
                      project.title === "Intelligent Resume Scanner" ? "/ATS project/demo.html" : "#"
                    }
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-30 transition-all"
                  >
                    Live Demo 🚀
                  </a>
                  <a 
                    href="https://github.com/iswaryaVerma"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-30 transition-all"
                  >
                    GitHub 📂
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects