import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <CTA />
      </main>
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} nabil.network. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:request@nabil.network" className="hover:text-slate-900">request@nabil.network</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
