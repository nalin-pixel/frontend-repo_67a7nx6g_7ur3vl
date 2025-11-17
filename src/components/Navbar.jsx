import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">N</div>
          <span className="font-semibold text-slate-800">nabil.network</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-700">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#solutions" className="hover:text-slate-900">Solutions</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a href="mailto:request@nabil.network" className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Get a Quote</a>
        <button className="md:hidden p-2 text-slate-600" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
