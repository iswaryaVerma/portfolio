function Hero() {
  return (
    <section className="bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="w-32 h-32 bg-gradient-to-br from-lavender-300 to-violet-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white/50">
          <img src="/0beb221d-0eb1-4e76-b2fe-c1b939e452b5.jpg" alt="Iswarya Verma" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">ISWARYA VERMA R</h1>
        <p className="text-2xl text-lavender-200 mb-2">B.Tech Computer Science & Business Systems</p>
        <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
          Motivated student specializing in Computer Science and Business Systems (TCS Powered Program) with strong skills 
          in programming, frontend and backend development. Passionate about React.js, Spring Boot, Unity, and AI.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#contact" className="bg-gradient-to-r from-violet-300 to-purple-400 text-white px-8 py-3 rounded-full hover:from-violet-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </a>
          <a href="https://github.com/iswaryaVerma" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-indigo-300 to-violet-400 text-white px-8 py-3 rounded-full hover:from-indigo-400 hover:to-violet-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            GitHub 🐙
          </a>
          <a href="/Iswarya-Verma-R-Resume-.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-300 to-pink-400 text-white px-8 py-3 rounded-full hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Resume 👁️
          </a>
        </div>
        <div className="flex justify-center space-x-6 text-sm text-white">
          <span className="hover:text-lavender-200 transition-colors">📧 iswaryaverma011@gmail.com</span>
          <span className="hover:text-lavender-200 transition-colors">📱 9344660012</span>
          <a href="https://www.linkedin.com/in/iswarya-verma-9739932a0" className="hover:text-lavender-200 transition-colors">🔗 LinkedIn</a>
          <a href="https://github.com/iswaryaVerma" target="_blank" rel="noopener noreferrer" className="hover:text-lavender-200 transition-colors">🐙 GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Hero