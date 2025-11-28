export default function Demo() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            SkySync Demo
          </h1>
          <p className="text-xl text-gray-300">See how SkySync transforms your workflow</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
          <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-300">Demo Video Coming Soon</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 mb-2">5 min</div>
              <p className="text-gray-400">Setup Time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">300%</div>
              <p className="text-gray-400">Productivity Boost</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-2">99.9%</div>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/signup"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105 inline-block mr-4"
          >
            Start Free Trial
          </a>
          <a 
            href="/"
            className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}