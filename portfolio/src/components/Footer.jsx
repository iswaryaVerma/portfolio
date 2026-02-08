function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">ISWARYA VERMA R</h3>
            <p className="text-gray-400 text-sm">
              Computer Science & Business Systems Student passionate about building innovative tech solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:iswaryaverma011@gmail.com" className="block text-gray-400 hover:text-white transition">Email</a>
              <a href="https://www.linkedin.com/in/iswarya-verma-9739932a0" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="/resume.pdf" className="block text-gray-400 hover:text-white transition">Download Resume</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ISWARYA VERMA R — Built with React + Tailwind CSS
        </div>
      </div>
    </footer>
  )
}

export default Footer