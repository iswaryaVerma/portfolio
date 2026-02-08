function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-violet-300 via-purple-400 to-indigo-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-white">Get In Touch</h2>
        
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border border-white/30 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-lavender-100">Contact Information</h3>
              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-violet-100">Email</p>
                    <a href="mailto:iswaryaverma011@gmail.com" className="text-lavender-200 hover:text-white transition-colors font-medium">
                      iswaryaverma011@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-violet-100">Phone</p>
                    <p className="text-white font-medium">9344660012</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <p className="text-sm text-violet-100">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/iswarya-verma-9739932a0" target="_blank" rel="noopener noreferrer" className="text-lavender-200 hover:text-white transition-colors font-medium">
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-violet-100">Location</p>
                    <p className="text-white font-medium">29/39 Amman Kulam, Rajeev Nagar<br/>Coimbatore – 45</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-lavender-100">Let's Connect</h3>
              <p className="text-violet-100 mb-8 text-left leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations. 
                Feel free to reach out if you'd like to connect! ✨
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:iswaryaverma011@gmail.com" className="bg-gradient-to-r from-violet-400 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-violet-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
                  Send Email 🚀
                </a>
                <button className="bg-gradient-to-r from-indigo-400 to-violet-500 text-white px-8 py-4 rounded-2xl hover:from-indigo-500 hover:to-violet-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium" onClick={() => window.open('/ISWARYA VERMA R (1).pdf', '_blank')}>
                  View Resume 👁️✨
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact