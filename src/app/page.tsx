export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),transparent)]"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full blur-3xl opacity-20 -z-10 top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-3xl opacity-15 -z-10 bottom-10 right-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 transform hover:translate-y-1 transition-all duration-300">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              Automate Your Cloud
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent"> Workflows</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              SkySync revolutionizes cloud automation with intelligent workflows, seamless integrations, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/signup"
                className="bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 text-white px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.5)] drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                Start Free Trial
              </a>
              <a 
                href="/demo"
                className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 text-white"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#0c0c0e] to-[#0f0f11] relative">
        <div className="absolute w-80 h-80 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full blur-3xl opacity-10 -z-10 top-1/2 left-1/4"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Powerful Features</h2>
            <p className="text-gray-400 text-lg text-balance">Everything you need to automate and optimize your cloud infrastructure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative bg-[#0f0f11] border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] transition-transform duration-300 ease-out hover:rotate-1 hover:scale-[1.02] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-violet-600 before:to-fuchsia-600 before:blur-3xl before:opacity-30">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 rounded-xl mb-4 flex items-center justify-center drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">Lightning Fast</h3>
              <p className="text-gray-400">Execute workflows in milliseconds with our optimized cloud infrastructure.</p>
            </div>
            <div className="relative bg-[#0f0f11] border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] transition-transform duration-300 ease-out hover:rotate-1 hover:scale-[1.02] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-violet-600 before:to-fuchsia-600 before:blur-3xl before:opacity-30">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 rounded-xl mb-4 flex items-center justify-center drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.</p>
            </div>
            <div className="relative bg-[#0f0f11] border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] transition-transform duration-300 ease-out hover:rotate-1 hover:scale-[1.02] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-violet-600 before:to-fuchsia-600 before:blur-3xl before:opacity-30">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 rounded-xl mb-4 flex items-center justify-center drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">Seamless Integration</h3>
              <p className="text-gray-400">Connect with 500+ cloud services and APIs out of the box.</p>
            </div>
            <div className="relative bg-[#0f0f11] border border-indigo-500/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] transition-transform duration-300 ease-out hover:rotate-1 hover:scale-[1.02] before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-teal-500 before:to-cyan-600 before:blur-3xl before:opacity-30">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]">Smart Analytics</h3>
              <p className="text-gray-400">Real-time insights and performance monitoring for all your workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Trusted by Teams Worldwide</h2>
            <p className="text-gray-400 text-lg text-balance">See what our customers say about SkySync</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300">"SkySync transformed our deployment process. What used to take hours now takes minutes."</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Mike Johnson</div>
                  <div className="text-gray-400 text-sm">DevOps Lead, CloudFirst</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300">"The automation capabilities are incredible. Our team productivity increased by 300%."</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Emma Davis</div>
                  <div className="text-gray-400 text-sm">Engineering Manager, ScaleUp</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300">"Best investment we've made. The ROI was visible within the first month."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-[#0f0f11] to-[#0c0c0e] relative">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-10 -z-10 top-1/3 right-1/4"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 text-lg text-balance">Choose the perfect plan for your team's needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 p-[1px] rounded-2xl">
              <div className="relative bg-[#0f0f11] rounded-2xl p-8 h-full hover:shadow-[0_12px_40px_rgba(99,102,241,0.3)] hover:-translate-y-2 transition-transform duration-300 ease-out hover:rotate-1 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-indigo-500/20 before:to-purple-600/20 before:blur-2xl before:opacity-50">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-1">$29<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-400">Perfect for small teams</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Up to 100 workflows</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <a 
                  href="/signup"
                  className="w-full border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] text-center block"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Pro Plan - Most Popular */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 p-[1px] rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-medium drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                  Most Popular
                </span>
              </div>
              <div className="relative bg-[#0f0f11] rounded-2xl p-8 h-full hover:shadow-[0_12px_50px_rgba(99,102,241,0.5)] hover:-translate-y-2 transition-transform duration-300 ease-out hover:rotate-1 ring-1 ring-indigo-500/30 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-indigo-500/30 before:to-fuchsia-600/30 before:blur-3xl before:opacity-60">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">Pro</h3>
                  <div className="text-3xl font-bold mb-1">$99<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-400">For growing businesses</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Unlimited workflows</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">25 team members</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                </ul>
                <a 
                  href="/signup"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] text-center block"
                >
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 p-[1px] rounded-2xl">
              <div className="relative bg-[#0f0f11] rounded-2xl p-8 h-full hover:shadow-[0_12px_40px_rgba(99,102,241,0.3)] hover:-translate-y-2 transition-transform duration-300 ease-out hover:rotate-1 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-indigo-500/20 before:to-purple-600/20 before:blur-2xl before:opacity-50">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-1">$299<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-400">For large organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                </ul>
                <a 
                  href="mailto:sales@skysync.com"
                  className="w-full border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] text-center block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0a0a0c] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                SkySync
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionizing cloud automation with intelligent workflows and enterprise-grade security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SkySync. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}